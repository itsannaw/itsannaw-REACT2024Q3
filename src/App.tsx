import { Component } from "react";

import SearchInput from "./components/forms/SearchInput/SearchInput";
import PreviewCard from "./components/cards/PreviewCard/PreviewCard";
import { fetchImages, fetchSearch, Image } from "./services/imageService";
import "./App.css";
import Loader from "./components/loader/Loader";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary";
import ReservePage from "./pages/reserve/ReservePage";
import TriggerButton from "./components/buttons/TriggerButton";

interface AppState {
	images: Image[];
	isLoading: boolean;
	showErrorTrigger: boolean;
}

class App extends Component<object, AppState> {
	constructor(props: object) {
		super(props);
		this.state = {
			images: [],
			isLoading: false,
			showErrorTrigger: false,
		};
	}

	componentDidMount() {
		this.loadImages();
	}

	loadImages = async () => {
		this.setState({ isLoading: true });
		try {
			const savedQuery = localStorage.getItem("searchQuery");
			const images = savedQuery
				? await fetchImages(savedQuery)
				: await fetchImages();
			this.setState({ images });
		} catch (error) {
			console.error("Error loading images:", error);
		} finally {
			this.setState({ isLoading: false });
		}
	};

	handleSearch = async (query: string) => {
		this.setState({ isLoading: true });
		try {
			const images = await fetchSearch(query);
			this.setState({ images });
		} catch (error) {
			console.error("Error searching images:", error);
		} finally {
			this.setState({ isLoading: false });
		}
	};

	triggerError = () => {
		this.setState({ showErrorTrigger: true });
	};

	render() {
		const { images, isLoading, showErrorTrigger } = this.state;
		return (
			<div className="app">
				<ErrorBoundary fallback={<ReservePage />}>
					<div>
						<div className="logo-container">
							<img className="logo" src="/black-cat.svg" alt="Black cat" />
							<h1>Cat Search</h1>
						</div>
						<div className="search-container">
							<SearchInput onSearch={this.handleSearch} />
							<TriggerButton
								triggerError={this.triggerError}
								showErrorTrigger={showErrorTrigger}
							/>
						</div>
					</div>
					<div className="preview-cards-container">
						{(() => {
							if (isLoading) {
								return <Loader />;
							}
							if (images && images.length > 0) {
								return images.map((image) => (
									<PreviewCard key={image.id} image={image} />
								));
							}
							return <p>No images available</p>;
						})()}
					</div>
				</ErrorBoundary>
			</div>
		);
	}
}

export default App;

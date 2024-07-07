import { Component } from "react";

import SearchInput from "./components/forms/SearchInput/SearchInput";
import PreviewCard from "./components/cards/PreviewCard/PreviewCard";
import { fetchImages, fetchSearch, Image } from "./services/imageService";
import "./App.css";

interface AppState {
	images: Image[];
	isLoading: boolean;
}

class App extends Component<object, AppState> {
	constructor(props: object) {
		super(props);
		this.state = {
			images: [],
			isLoading: false,
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
			this.setState({ images, isLoading: false });
		} catch (error) {
			console.error("Error loading images:", error);
			this.setState({ isLoading: false });
		}
	};

	handleSearch = async (query: string) => {
		this.setState({ isLoading: true });
		try {
			const images = await fetchSearch(query);
			this.setState({ images, isLoading: false });
		} catch (error) {
			console.error("Error searching images:", error);
			this.setState({ isLoading: false });
		}
	};

	render() {
		const { images, isLoading } = this.state;
		return (
			<div className="app">
				<div>
					<div className="logo-container">
						<img className="logo" src="/black-cat.svg" alt="Black cat" />
						<h1>Cat Search</h1>
					</div>
					<SearchInput onSearch={this.handleSearch} />
				</div>
				<div className="preview-cards-container">
					{(() => {
						if (isLoading) {
							return <p>Loading...</p>;
						}
						if (images && images.length > 0) {
							return images.map((image) => (
								<PreviewCard key={image.id} image={image} />
							));
						}
						return <p>No images available</p>;
					})()}
				</div>
			</div>
		);
	}
}

export default App;

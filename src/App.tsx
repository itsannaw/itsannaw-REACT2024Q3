import { Component } from "react";

import SearchInput from "./components/forms/SearchInput/SearchInput";
import PreviewCard from "./components/cards/PreviewCard/PreviewCard";
import { fetchImages, fetchSearch, Image } from "./services/imageService";
import "./App.css";

interface AppState {
	images: Image[];
}

class App extends Component<object, AppState> {
	constructor(props: object) {
		super(props);
		this.state = {
			images: [],
		};
	}

	componentDidMount() {
		this.loadImages();
	}

	loadImages = async () => {
		try {
			const images = await fetchImages();
			this.setState({ images });
		} catch (error) {
			console.error("Error loading images:", error);
		}
	};

	handleSearch = async (query: string) => {
		try {
			const images = await fetchSearch(query);
			this.setState({ images });
		} catch (error) {
			console.error("Error searching images:", error);
		}
	};

	render() {
		const { images } = this.state;
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
					{images?.length > 0 ? (
						images.map((image) => <PreviewCard key={image.id} image={image} />)
					) : (
						<p>No images available</p>
					)}
				</div>
			</div>
		);
	}
}

export default App;

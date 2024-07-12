import { useState, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";

import SearchInput from "./components/forms/SearchInput/SearchInput";
import PreviewCard from "./components/cards/PreviewCard/PreviewCard";
import { fetchImages, fetchSearch, Image } from "./services/imageService";
import "./App.scss";
import Loader from "./components/loader/Loader";
import ReservePage from "./pages/reserve/ReservePage";

const App = () => {
	const [images, setImages] = useState<Image[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	const loadImages = async () => {
		setIsLoading(true);
		try {
			const savedQuery = localStorage.getItem("searchQuery");
			const fetchedImages = savedQuery
				? await fetchImages(savedQuery)
				: await fetchImages();
			setImages(fetchedImages);
		} catch (error) {
			console.error("Error loading images:", error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		loadImages();
	}, []);

	const handleSearch = async (query: string) => {
		setIsLoading(true);
		try {
			const searchedImages = await fetchSearch(query);
			setImages(searchedImages);
		} catch (error) {
			console.error("Error searching images:", error);
		} finally {
			setIsLoading(false);
		}
	};

	const renderContent = () => {
		if (isLoading) {
			return <Loader />;
		}

		if (images.length > 0) {
			return images.map((image) => (
				<PreviewCard key={image.id} image={image} />
			));
		}

		return <p>No images available</p>;
	};

	return (
		<div className="app">
			<ErrorBoundary fallback={<ReservePage />}>
				<div className="logo-container">
					<img className="logo" src="/logo.svg" alt="pokeball" />
					<div className="logo-text">
						<h1>Pokédex</h1>
						<p>Find your pokemon!</p>
					</div>
				</div>
				<div className="search-container">
					<SearchInput onSearch={handleSearch} />
				</div>
				<div className="preview-cards-container">{renderContent()}</div>
			</ErrorBoundary>
		</div>
	);
};

export default App;

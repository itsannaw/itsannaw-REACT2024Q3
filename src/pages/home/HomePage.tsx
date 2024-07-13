import { useState, useEffect, useCallback } from "react";
import { ErrorBoundary } from "react-error-boundary";

import fetchCards from "@/api/cards";
import PreviewCard from "@/components/cards/PreviewCard/PreviewCard";
import SearchInput from "@/components/forms/SearchInput/SearchInput";
import Loader from "@/components/loader/Loader";
import Pagination from "@/components/pagination/Pagination";
import { PokemonCard } from "@/types/pokemonCard";

import styles from "./HomePage.module.scss";

const HomePage = () => {
	const [cards, setCards] = useState<PokemonCard[]>([]);
	const [pagination, setPagination] = useState({
		currentPage: 1,
		totalPages: 10,
	});
	const [isLoading, setIsLoading] = useState(false);

	const loadCards = useCallback(
		async (query = "") => {
			setIsLoading(true);
			try {
				const fetchedData = await fetchCards(
					pagination.currentPage,
					20,
					query ? `name:${query}` : undefined
				);
				setCards(fetchedData.data);
				setPagination((prev) => ({
					...prev,
					totalPages: Math.ceil(fetchedData.totalCount / 20),
				}));
			} catch (error) {
				console.error("Error loading cards:", error);
			} finally {
				setIsLoading(false);
			}
		},
		[pagination.currentPage]
	);

	useEffect(() => {
		const savedQuery = localStorage.getItem("searchQuery") || "";
		loadCards(savedQuery);
	}, [pagination.currentPage, loadCards]);

	const handleSearch = async (query: string) => {
		loadCards(query);
	};

	const handlePageChange = (page: number) => {
		setPagination((prev) => ({ ...prev, currentPage: page }));
	};

	const renderContent = () => {
		if (isLoading) {
			return <Loader />;
		}

		if (cards.length > 0) {
			return (
				<>
					{cards.map((card) => (
						<PreviewCard key={card.id} card={card} />
					))}
					<Pagination
						totalPages={pagination.totalPages}
						currentPage={pagination.currentPage}
						onPageChange={handlePageChange}
					/>
				</>
			);
		}

		return <p>No cards available</p>;
	};

	return (
		<div className={styles.app}>
			<ErrorBoundary fallback={<div>Something went wrong</div>}>
				<div className={styles.logoContainer}>
					<img className={styles.logo} src="/logo.svg" alt="pokeball" />
					<div className={styles.logoText}>
						<h1>Pokédex</h1>
						<p>Find your pokemon!</p>
					</div>
				</div>
				<div className={styles.searchContainer}>
					<SearchInput onSearch={handleSearch} />
				</div>
				<div className={styles.previewCardsContainer}>{renderContent()}</div>
			</ErrorBoundary>
		</div>
	);
};

export default HomePage;

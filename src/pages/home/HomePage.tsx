import { Suspense, useEffect, useCallback } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useSearchParams, Outlet, useNavigate } from "react-router-dom";

import SearchInput from "@/components/forms/SearchInput/SearchInput";
import Header from "@/components/header/Header";
import Loader from "@/components/loader/Loader";
import useLoadCards from "@/hooks/card/LoadCards/useLoadCards";
import usePagination from "@/hooks/usePagination";

import styles from "./HomePage.module.scss";
import HomeContent from "@/components/content/HomeContent/HomeContent";

const HomePage: React.FC = () => {
	const { pagination, setPagination, query, page, handlePageChange } =
		usePagination();
	const { cards, isLoading, loadCards } = useLoadCards();
	const [searchParams, setSearchParams] = useSearchParams();
	const navigate = useNavigate();

	const selectedCardId = searchParams.get("id");

	useEffect(() => {
		const loadData = async () => {
			const totalPages = await loadCards(query, page);
			setPagination((prev) => ({ ...prev, totalPages }));
		};

		loadData();
	}, [query, page, loadCards, setPagination]);

	const handleSearch = (searchQuery: string) => {
		setPagination((prev) => ({ ...prev, currentPage: 1 }));
		setSearchParams({ q: searchQuery, page: "1" });
	};

	const handleCardClick = (id: string) => {
		navigate(`/details/?id=${id}&q=${query}&page=${page}`);
	};

	const handleCloseDetails = useCallback(() => {
		navigate(`/?q=${query}&page=${page}`);
	}, [navigate, query, page]);

	return (
		<div className={`${styles.app} ${selectedCardId && styles.isDetailsOpen}`}>
			<ErrorBoundary fallback={<div>Something went wrong</div>}>
				<div className={styles.leftSection}>
					<Header />
					<div className={styles.searchContainer}>
						<SearchInput onSearch={handleSearch} />
					</div>
					<HomeContent
						isLoading={isLoading}
						cards={cards}
						pagination={pagination}
						handlePageChange={handlePageChange}
						onCardClick={handleCardClick}
					/>
				</div>
				{selectedCardId && (
					<div className={styles.detailsSection}>
						<Suspense fallback={<Loader />}>
							<button type="button" onClick={handleCloseDetails}>
								<img src="/close.svg" alt="Close" />
							</button>
							<Outlet />
						</Suspense>
					</div>
				)}
			</ErrorBoundary>
		</div>
	);
};

export default HomePage;

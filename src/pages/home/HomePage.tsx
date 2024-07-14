import { useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useSearchParams } from "react-router-dom";

import SearchInput from "@/components/forms/SearchInput/SearchInput";
import Header from "@/components/header/Header";
import useLoadCards from "@/hooks/useLoadCards";
import usePagination from "@/hooks/usePagination";

import Content from "./Content";
import styles from "./HomePage.module.scss";

const HomePage = () => {
	const { pagination, setPagination, query, page, handlePageChange } =
		usePagination();
	const { cards, isLoading, loadCards } = useLoadCards();
	const [, setSearchParams] = useSearchParams();

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

	return (
		<div className={styles.app}>
			<ErrorBoundary fallback={<div>Something went wrong</div>}>
				<Header />
				<div className={styles.searchContainer}>
					<SearchInput onSearch={handleSearch} />
				</div>
				<Content
					isLoading={isLoading}
					cards={cards}
					pagination={pagination}
					handlePageChange={handlePageChange}
				/>
			</ErrorBoundary>
		</div>
	);
};

export default HomePage;

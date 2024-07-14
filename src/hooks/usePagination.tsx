import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const usePagination = () => {
	const [pagination, setPagination] = useState({
		currentPage: 1,
		totalPages: 1,
	});
	const [searchParams, setSearchParams] = useSearchParams();

	const query = searchParams.get("q") || "";
	const page = parseInt(searchParams.get("page") || "1", 10);

	const handlePageChange = (newPage: number) => {
		setPagination((prev) => ({ ...prev, currentPage: newPage }));
		setSearchParams({ q: query, page: newPage.toString() });
	};

	useEffect(() => {
		setPagination((prev) => ({ ...prev, currentPage: page }));
	}, [page]);

	return { pagination, setPagination, query, page, handlePageChange };
};

export default usePagination;

import React from "react";

import styles from "./Pagination.module.scss";

interface PaginationProps {
	totalPages: number;
	currentPage: number;
	onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
	totalPages,
	currentPage,
	onPageChange,
}) => {
	const visiblePageRange = 2;

	const getPageRange = () => {
		const range = [];
		const start = Math.max(1, currentPage - visiblePageRange);
		const end = Math.min(totalPages, currentPage + visiblePageRange);

		for (let i = start; i <= end; i += 1) {
			range.push(i);
		}

		return range;
	};

	const pageRange = getPageRange();

	return (
		<div className={styles.pagination}>
			{currentPage > 1 && (
				<button
					type="button"
					className={styles.pageButton}
					onClick={() => onPageChange(currentPage - 1)}
				>
					&laquo; Prev
				</button>
			)}

			{pageRange.map((page) => (
				<button
					type="button"
					key={page}
					className={
						page === currentPage ? styles.activePage : styles.pageButton
					}
					onClick={() => onPageChange(page)}
				>
					{page}
				</button>
			))}

			{currentPage < totalPages && (
				<button
					type="button"
					className={styles.pageButton}
					onClick={() => onPageChange(currentPage + 1)}
				>
					Next &raquo;
				</button>
			)}
		</div>
	);
};

export default Pagination;

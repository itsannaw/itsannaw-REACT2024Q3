import React, { useState } from "react";

import styles from "./SearchInput.module.scss";

interface SearchInputProps {
	onSearch: (query: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
	const [query, setQuery] = useState(() => {
		const savedQuery = localStorage.getItem("searchQuery");
		return savedQuery || "";
	});

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(event.target.value);
	};

	const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		onSearch(query.trim());
		localStorage.setItem("searchQuery", query.trim());
	};

	return (
		<form className={styles.searchInput} onSubmit={handleSearch}>
			<input
				type="search"
				value={query}
				onChange={handleInputChange}
				placeholder="Search query..."
				className={styles.searchInputField}
			/>
			<button type="submit" className={styles.searchInputButton}>
				Search
			</button>
		</form>
	);
};

export default SearchInput;

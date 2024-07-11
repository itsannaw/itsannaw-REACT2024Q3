import React, { useState } from "react";
import "./SearchInput.style.css";

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
		<form className="search-input" onSubmit={handleSearch}>
			<input
				type="search"
				value={query}
				onChange={handleInputChange}
				placeholder="Find a cat breed..."
				className="search-input__field"
			/>
			<span className="help-block">
				For example, beng, abys, aege, acur, bsho, cymr, lihu...
			</span>
			<button type="submit" className="search-input__button">
				Search
			</button>
		</form>
	);
};

export default SearchInput;

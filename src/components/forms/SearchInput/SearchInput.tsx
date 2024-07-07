import React, { Component } from "react";
import "./SearchInput.style.css";

interface Props {
	onSearch: (query: string) => void;
}

interface State {
	query: string;
}

class SearchInput extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		const savedQuery = localStorage.getItem("searchQuery");
		this.state = {
			query: savedQuery || "",
		};
	}

	handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newQuery = event.target.value;
		this.setState({ query: newQuery });
		localStorage.setItem("searchQuery", newQuery.trim());
	};

	handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const { query } = this.state;
		const { onSearch } = this.props;
		onSearch(query.trim());
	};

	render() {
		const { query } = this.state;
		return (
			<form className="search-input" onSubmit={this.handleSearch}>
				<input
					type="search"
					value={query}
					onChange={this.handleInputChange}
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
	}
}

export default SearchInput;

import React, { Component } from "react";
import "./SearchInput.style.css";

interface State {
	query: string;
}

class SearchInput extends Component<{}, State> {
	constructor(props: {}) {
		super(props);
		this.state = {
			query: "",
		};
	}

	handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({ query: event.target.value });
	};

	handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log("Searching for:", this.state.query);
	};

	render() {
		return (
			<form className="search-input" onSubmit={this.handleSearch}>
				<input
					type="text"
					value={this.state.query}
					onChange={this.handleInputChange}
					placeholder="Looking for kitties..."
					className="search-input__field"
				/>
				<button type="submit" className="search-input__button">
					Search
				</button>
			</form>
		);
	}
}

export default SearchInput;

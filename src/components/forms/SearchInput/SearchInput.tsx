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

	handleSearch = () => {
		console.log("Searching for:", this.state.query);
	};

	render() {
		return (
			<div className="search-input">
				<input
					type="text"
					value={this.state.query}
					onChange={this.handleInputChange}
					placeholder="Looking for kitties..."
					className="search-input__field"
				/>
				<button onClick={this.handleSearch} className="search-input__button">
					Search
				</button>
			</div>
		);
	}
}

export default SearchInput;

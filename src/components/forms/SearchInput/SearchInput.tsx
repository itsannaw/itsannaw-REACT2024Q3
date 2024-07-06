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
		this.state = {
			query: "",
		};
	}

	handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({ query: event.target.value });
	};

	handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const { query } = this.state;
		const { onSearch } = this.props;
		onSearch(query);
	};

	render() {
		const { query } = this.state;
		return (
			<form className="search-input" onSubmit={this.handleSearch}>
				<input
					type="text"
					value={query}
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

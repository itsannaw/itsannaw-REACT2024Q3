import { Component } from "react";
import SearchInput from "./components/forms/SearchInput/SearchInput";

import "./App.css";
import PreviewCard from "./components/cards/PreviewCard/PreviewCard";

class App extends Component {
	render() {
		return (
			<div className="app">
				<SearchInput />
				<PreviewCard />
			</div>
		);
	}
}

export default App;

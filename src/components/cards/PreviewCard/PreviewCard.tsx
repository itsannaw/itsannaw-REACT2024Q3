import { Component } from "react";
import "./PreviewCard.style.css";

class PreviewCard extends Component {
	constructor(props: {}) {
		super(props);
	}

	render() {
		return (
			<div className="preview-card">
				<img
					className="preview-card__image"
					src="https://cataas.com/cat"
					alt="Cataas"
				/>
			</div>
		);
	}
}

export default PreviewCard;

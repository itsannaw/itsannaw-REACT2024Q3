import { Component } from "react";
import "./PreviewCard.style.css";
import { Image } from "../../../services/imageService";

interface PreviewCardProps {
	image: Image;
}

class PreviewCard extends Component<PreviewCardProps> {
	constructor(props: PreviewCardProps) {
		super(props);
	}

	render() {
		const { image } = this.props;
		return (
			<div className="preview-card">
				<div className="preview-card__image-container">
					<img
						className="preview-card__image"
						src={image.url}
						alt={image.breeds.length > 0 ? image.breeds[0].name : "Cat"}
					/>
				</div>
				{image.breeds.length > 0 && (
					<div className="preview-card__info">
						<h2>{image.breeds[0].name}</h2>
						<p>Weight: {image.breeds[0].weight.metric} kg</p>
					</div>
				)}
			</div>
		);
	}
}

export default PreviewCard;

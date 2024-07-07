import { Component } from "react";

import "./PreviewCard.style.css";
import { Image } from "../../../services/imageService";

interface PreviewCardProps {
	image: Image;
}

class PreviewCard extends Component<PreviewCardProps> {
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

				<div className="preview-card__info">
					{image.breeds.length > 0 ? (
						<>
							<h2>{image.breeds[0].name}</h2>
							<p>Weight: {image.breeds[0].weight.metric} kg</p>
						</>
					) : (
						<>
							<h2>Funny cat</h2>
							<p>Weight: big positive</p>
						</>
					)}
				</div>
			</div>
		);
	}
}

export default PreviewCard;

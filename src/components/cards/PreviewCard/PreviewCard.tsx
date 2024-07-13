import React from "react";

import "./PreviewCard.styles.scss";
import { PokemonCard } from "@/types/pokemonCard";

interface PreviewCardProps {
	card: PokemonCard;
}

const PreviewCard: React.FC<PreviewCardProps> = ({ card }) => (
	<div className="preview-card">
		<div className="preview-card__image-container">
			<img
				className="preview-card__image"
				src={card.images.large}
				alt={card.name}
			/>
		</div>

		<div className="preview-card__info" />
	</div>
);

export default PreviewCard;

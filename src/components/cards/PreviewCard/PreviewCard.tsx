import React from "react";

import { PokemonCard } from "@/types/pokemonCard";

import styles from "./PreviewCard.module.scss";

interface PreviewCardProps {
	card: PokemonCard;
}

const PreviewCard: React.FC<PreviewCardProps> = ({ card }) => (
	<div className={styles.previewCard}>
		<div className={styles.previewCardImageContainer}>
			<img
				className={styles.previewCardImage}
				src={card.images.large}
				alt={card.name}
			/>
		</div>

		<div className={styles.previewCardInfo} />
	</div>
);

export default PreviewCard;

import React from "react";
import { useSearchParams } from "react-router-dom";

import Loader from "@/components/loader/Loader";
import useDetailCard from "@/hooks/card/DetailCard/useDetailCard";

import styles from "./DetailCard.module.scss";

const DetailCard: React.FC = () => {
	const [searchParams] = useSearchParams();
	const selectedCardId = searchParams.get("id");
	const { card, isLoading } = useDetailCard(selectedCardId || "");

	if (isLoading) {
		return <Loader />;
	}

	if (!card) {
		return <div>Card details not found</div>;
	}

	return (
		<div className={styles.detailCard}>
			<h1>{card.name}</h1>
			<img src={card.images?.large} alt={card.name} />
			<div>
				<span>
					<b>HP: </b>
					{card.hp || "N/A"}
				</span>
				<span>
					<b>Rarity:</b> {card.rarity || "N/A"}
				</span>
				<span>
					<b>Description:</b> {card.flavorText || "N/A"}
				</span>
			</div>
		</div>
	);
};

export default DetailCard;

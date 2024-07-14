import React from "react";
import { useSearchParams } from "react-router-dom";

import Loader from "@/components/loader/Loader";
import useDetailCard from "@/hooks/useDetailCard";

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
		</div>
	);
};

export default DetailCard;

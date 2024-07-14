import React from "react";
import PreviewCard from "@/components/cards/PreviewCard/PreviewCard";
import Loader from "@/components/loader/Loader";
import Pagination from "@/components/pagination/Pagination";
import { PokemonCard } from "@/types/pokemonCard";

import styles from "./HomePage.module.scss";

interface ContentProps {
	isLoading: boolean;
	cards: PokemonCard[];
	pagination: { currentPage: number; totalPages: number };
	handlePageChange: (page: number) => void;
}

const Content: React.FC<ContentProps> = ({
	isLoading,
	cards,
	pagination,
	handlePageChange,
}) => {
	if (isLoading) {
		return <Loader />;
	}

	if (cards.length > 0) {
		return (
			<>
				<div className={styles.previewCardsContainer}>
					{cards.map((card) => (
						<PreviewCard key={card.id} card={card} />
					))}
				</div>
				<Pagination
					totalPages={pagination.totalPages}
					currentPage={pagination.currentPage}
					onPageChange={handlePageChange}
				/>
			</>
		);
	}

	return <p>No cards available</p>;
};

export default Content;

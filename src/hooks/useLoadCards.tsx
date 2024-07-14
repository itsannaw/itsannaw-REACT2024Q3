import { useState, useCallback } from "react";

import { fetchCards } from "@/api/cards";
import { PokemonCard } from "@/types/pokemonCard";

const useLoadCards = () => {
	const [cards, setCards] = useState<PokemonCard[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	const loadCards = useCallback(async (query = "", page = 1) => {
		setIsLoading(true);
		try {
			const fetchedData = await fetchCards(
				page,
				20,
				query ? `name:${query}*` : undefined
			);
			setCards(fetchedData.data);
			return Math.ceil(fetchedData.totalCount / 20);
		} catch (error) {
			console.error("Error loading cards:", error);
			return 1;
		} finally {
			setIsLoading(false);
		}
	}, []);

	return { cards, isLoading, loadCards };
};

export default useLoadCards;

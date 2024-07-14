import { useEffect, useState } from "react";

import { fetchCardDetails } from "@/api/cards";
import { PokemonCard } from "@/types/pokemonCard";

const useDetailCard = (id: string) => {
	const [card, setCard] = useState<PokemonCard | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const loadCardDetails = async () => {
			setIsLoading(true);
			try {
				const fetchedCard = await fetchCardDetails(id!);
				setCard(fetchedCard);
			} catch (error) {
				console.error("Error loading card details:", error);
			} finally {
				setIsLoading(false);
			}
		};

		loadCardDetails();
	}, [id]);

	return { card, isLoading };
};

export default useDetailCard;

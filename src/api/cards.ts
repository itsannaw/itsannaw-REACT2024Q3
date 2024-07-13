import api from "./settings";

const fetchCards = async (page: number, pageSize: number, q?: string) => {
	try {
		const response = await api.get("cards", {
			params: {
				page,
				pageSize,
				q,
			},
		});
		return response.data;
	} catch (error) {
		console.error("Error fetching cards:", error);
		throw error;
	}
};

export default fetchCards;

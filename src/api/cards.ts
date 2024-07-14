import api from "./settings";

export const fetchCards = async (
	page: number,
	pageSize: number,
	q?: string
) => {
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

export const fetchCardDetails = async (id: string) => {
	try {
		const response = await api.get(`cards/${id}`);
		return response.data.data;
	} catch (error) {
		console.error("Error fetching card details:", error);
		throw error;
	}
};

import CAT_API from "../const/api";

export interface Breed {
	weight: {
		imperial: string;
		metric: string;
	};
	id: string;
	name: string;
}

export interface Image {
	id: string;
	url: string;
	width: number;
	height: number;
	breeds: Breed[];
}

export const fetchImages = async (): Promise<Image[]> => {
	try {
		const response = await fetch(CAT_API.fetchImages);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching images:", error);
		throw error;
	}
};

export const fetchSearch = async (query: string): Promise<Image[]> => {
	try {
		const response = await fetch(CAT_API.fetchSearch(query));
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching images:", error);
		throw error;
	}
};

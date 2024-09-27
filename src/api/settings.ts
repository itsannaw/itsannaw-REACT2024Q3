import axios from "axios";

const api = axios.create({
	baseURL: "https://api.pokemontcg.io/v2/",
	headers: {
		"Content-Type": "application/json",
		Authorization: `Bearer ${import.meta.env.VITE_APP_API_KEY}`,
	},
});

export default api;

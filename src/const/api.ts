const CAT_API = {
	fetchImages: (query: string = "beng,abys,aege,acur,bsho,cymr,lihu") =>
		`https://api.thecatapi.com/v1/images/search?limit=12&breed_ids=${query}&api_key=${import.meta.env.VITE_APP_API_KEY}`,
	fetchSearch: (query: string) =>
		`https://api.thecatapi.com/v1/images/search?limit=12&breed_ids=${query}&api_key=${import.meta.env.VITE_APP_API_KEY}`,
};

export default CAT_API;

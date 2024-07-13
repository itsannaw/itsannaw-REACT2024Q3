export interface PokemonCard {
	id: string;
	name: string;
	supertype: string;
	subtypes: string[];
	hp: string;
	types: string[];
	evolvesFrom: string;
	attacks: Attack[];
	weaknesses: WeaknessResistance[];
	resistances: WeaknessResistance[];
	retreatCost: string[];
	convertedRetreatCost: number;
	set: SetDetails;
	number: string;
	artist: string;
	rarity: string;
	flavorText: string;
	nationalPokedexNumbers: number[];
	legalities: Legalities;
	images: CardImages;
	tcgplayer: TCGPlayer;
	cardmarket: CardMarket;
	page: number;
	pageSize: number;
	count: number;
	totalCount: number;
}

interface Attack {
	name: string;
	cost: string[];
	convertedEnergyCost: number;
	damage: string;
	text: string;
}

interface WeaknessResistance {
	type: string;
	value: string;
}

interface SetDetails {
	id: string;
	name: string;
	series: string;
	printedTotal: number;
	total: number;
	legalities: Legalities;
	ptcgoCode: string;
	releaseDate: string;
	updatedAt: string;
	images: SetImages;
}

interface Legalities {
	unlimited: string;
}

interface SetImages {
	symbol: string;
	logo: string;
}

interface CardImages {
	small: string;
	large: string;
}

interface TCGPlayer {
	url: string;
	updatedAt: string;
	prices: Prices;
}

interface Prices {
	holofoil: HolofoilPrices;
	reverseHolofoil: HolofoilPrices;
}

interface HolofoilPrices {
	low: number | null;
	mid: number | null;
	high: number | null;
	market: number | null;
	directLow: number | null;
}

interface CardMarket {
	url: string;
	updatedAt: string;
	prices: CardMarketPrices;
}

interface CardMarketPrices {
	averageSellPrice: number;
	lowPrice: number;
	trendPrice: number;
	germanProLow: number;
	suggestedPrice: number;
	reverseHoloSell: number;
	reverseHoloLow: number;
	reverseHoloTrend: number;
	lowPriceExPlus: number;
	avg1: number;
	avg7: number;
	avg30: number;
	reverseHoloAvg1: number;
	reverseHoloAvg7: number;
	reverseHoloAvg30: number;
}

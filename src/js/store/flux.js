const ROOT_URL = "https://swapi.tech/api";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			vehicles: [],
			planets: [],
			favorites: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			getAllPeople: async () => {
				try {
					const response = await fetch(`${ROOT_URL}/people`);
					const data = await response.json();
					setStore({ people: data.results });
				} catch (error) {
					console.log(error);
				}
			},
			getPeopleById: async (id) => {
				try {
					const response = await fetch(`${ROOT_URL}/people/${id}`);
					const data = await response.json();
					return data;
				} catch (error) {
					console.log(error);
				}
			},
			getAllVehicles: async () => {
				try {
					const response = await fetch(`${ROOT_URL}/vehicles`);
					const data = await response.json();
					setStore({ vehicles: data.results });
				} catch (error) {
					console.log(error);
				}
			},
			getVehicleById: async (id) => {
				try {
					const response = await fetch(`${ROOT_URL}/vehicles/${id}`);
					const data = await response.json();
					return data;
				} catch (error) {
					console.log(error);
				}
			},
			getAllPlanets: async () => {
				try {
					const response = await fetch(`${ROOT_URL}/planets`);
					const data = await response.json();
					setStore({ planets: data.results });
				} catch (error) {
					console.log(error);
				}
			},
			getPlanetById: async (id) => {
				try {
					const response = await fetch(`${ROOT_URL}/planets/${id}`);
					const data = await response.json();
					return data;
				} catch (error) {
					console.log(error);
				}
			},
			addFavorite: (item) => {
				const store = getStore();
				if (store.favorites.some((favorite) => favorite.result.uid === item.result.uid)) return;
				setStore({ favorites: [...store.favorites, item] });
			},
			removeFavorite: (id) => {
				const store = getStore();
				const newFavorites = store.favorites.filter((item) => item.result.uid !== id);
				setStore({ favorites: newFavorites });
			},
		},
	};
};

export default getState;

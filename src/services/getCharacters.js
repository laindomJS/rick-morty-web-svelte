const API_URL = 'https://rickandmortyapi.com/api/character?page=1';

export const getCharacters = async () => {
	const res = await fetch(API_URL);
	if (res.ok) {
		const data = await res.json();
		const { results } = data;
		return results;
	}
}

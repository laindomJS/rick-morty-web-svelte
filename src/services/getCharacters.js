export const getCharacters = async ({ page }) => {
	const API_URL = `https://rickandmortyapi.com/api/character?page=${page}`;
	const res = await fetch(API_URL);
	if (res.ok) {
		const data = await res.json();
		const { results } = data;
		return results;
	}
}
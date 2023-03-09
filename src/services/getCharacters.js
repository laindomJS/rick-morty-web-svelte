const API_URL = 'https://rickandmortyapi.com/api/character?page=1';

export const getCharacters = async () => {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    const { results } = data;
    if (!Array.isArray(results)) {
      getCharacters(); 
    }
    return results;
  } catch (error) {
    console.log(error.message);
  }
}
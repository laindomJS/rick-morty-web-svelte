import { writable, derived } from 'svelte/store';
import { getCharacters } from '../services/getCharacters';

// characters
const createCharacters = () => {
  const { subscribe, update, set } = writable([]);
  let page = 1;
  
  return {
    subscribe,
    setCharacters: async () => {
      await getCharacters({ page }).then(results => set(results));
    },
    nextPage: async () => {
      if (page === 42) return;
      page = page + 1; 
      await getCharacters({ page }).then(results => update(chars => chars = results));
    },
    previousPage: async () => {
      if (page === 1) return;
      page = page - 1;
      await getCharacters({ page }).then(results => update(chars => chars = results));
    }
  }
}
export const characters = createCharacters();

// searching
export const term = writable('');
export const filtered = derived(
  [term, characters],
  ([$term, $characters]) => {
    return $characters.filter((char) => char.name.toLowerCase().includes($term.toLowerCase()));
  }
)


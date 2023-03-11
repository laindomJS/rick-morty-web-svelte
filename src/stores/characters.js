import { writable, derived } from 'svelte/store';
import { getCharacters } from '../services/getCharacters';

// characters
const createCharacters = () => {
  const { subscribe, update, set } = writable([]);
  let page = 1;
  
  return {
    subscribe,
    setCharacters: () => {
      getCharacters({ page }).then(results => set(results));
    },
    nextPage: () => {
      page++;
      getCharacters({ page }).then(results => update(char => char = results));
    },
    previousPage: () => {
      page--;
      if (page === 1) return;
      getCharacters({ page }).then(results => update(char => char = results));
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


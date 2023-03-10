import { writable, derived } from 'svelte/store';
import { getCharacters } from '../services/getCharacters';

// characters
export const characters = writable([]);

const getItems = async () => {
  getCharacters().then(results => characters.set(results));
}
getItems();

// searching
export const term = writable('');
export const filtered = derived(
  [term, characters],
  ([$term, $characters]) => {
    return $characters.filter((char) => char.name.toLowerCase().includes($term.toLowerCase()));
  }
)
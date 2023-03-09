import { writable } from 'svelte/store';
import { getCharacters } from '../services/getCharacters';

// characters
export const characters = writable([]);

const getItems = async () => {
  getCharacters().then(results => characters.set(results));
}
getItems();
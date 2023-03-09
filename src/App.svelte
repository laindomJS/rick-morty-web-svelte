<script>
  import { onMount } from 'svelte';
  import { getCharacters } from './services/getCharacters';
  import ListOfCharacters from './lib/ListOfCharacters.svelte';

  let characters = []; 

  onMount( async () => {
    getCharacters().then(results => characters = results);
  })
</script>

<main class="w-full min-h-screen bg-slate-800 text-white flex justify-content items-center flex-col">
  <h1>Hello World</h1>
  <ListOfCharacters {characters} />
</main>


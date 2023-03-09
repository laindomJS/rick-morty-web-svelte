<script>
  import { onMount } from 'svelte';
  import { getCharacters } from './services/getCharacters';
  import ListOfCharacters from './lib/ListOfCharacters.svelte';
  import Header from './lib/Header.svelte';

  let characters = []; 

  onMount( async () => {
    getCharacters().then(results => characters = results);
  })
</script>

<div class="w-full min-h-screen bg-slate-100 text-white flex justify-content items-center flex-col">
  <Header />
  <ListOfCharacters {characters} />
</div>


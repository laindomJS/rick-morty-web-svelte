<script>
  import { onMount } from 'svelte';
  import { getCharacters } from './services/getCharacters';
  import Character from './lib/Character.svelte';
  let characters = []; 

  onMount( async () => {
    getCharacters().then(results => characters = results);
  })
</script>

<main>
  <h1>Hello World</h1>
  {#if characters.length === 0}
    <p>Loading...</p>
    {:else}
    {#each characters as character}
      <Character {character} />
    {/each}
  {/if}
</main>

<style>

</style>

<script>
  import { onMount } from 'svelte';

  let characters = []; 

  onMount( async () => {
    const res = await fetch('https://rickandmortyapi.com/api/character');
    const data = await res.json();
    const { results } = data;
    characters = results;
  })
</script>

<main>
  <h1>Hello World</h1>
  {#if !characters}
    <p>Loading...</p>
    {:else}
    {#each characters as character}
      <li>{character.name}</li>
    {/each}
  {/if}
</main>

<style>

</style>

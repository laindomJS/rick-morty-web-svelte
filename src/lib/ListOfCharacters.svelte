<script>
  import Character from "./Character.svelte";
  export let characters;
</script>

{#if characters.length === 0}
  <p>Loading...</p>
{:else}
{#each characters as character}
  <Character {character} />
{/each}
{/if}
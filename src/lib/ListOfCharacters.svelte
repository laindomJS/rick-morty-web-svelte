<script>
	import Character from './Character.svelte';
	export let characters;
</script>

<main class="max-w-full p-4 flex flex-col md:flex-row md:flex-wrap space-y-8 md:space-y-4 md:space-x-4 items-center md:justify-center">
	{#if characters.length === 0}
		<p>Loading...</p>
	{:else}
		{#each characters as character}
			<Character {character} />
		{/each}
	{/if}
</main>

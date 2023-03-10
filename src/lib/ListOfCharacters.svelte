<script>
	import Character from './Character.svelte';
	import { filtered as characters } from '../stores/characters';
</script>

<main class="max-w-full p-4 flex flex-col md:flex-row md:flex-wrap space-y-6 md:space-y-0 gap-8 items-center md:justify-center">
	{#if $characters.length === 0}
		<p>Loading...</p>
	{:else}
		{#each $characters as character}
			<Character {character} />
		{/each}
	{/if}
</main>

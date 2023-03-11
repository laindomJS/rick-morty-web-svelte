<script>
	import { onMount } from 'svelte';
	import { filtered, characters } from '../stores/characters';
	import Character from './Character.svelte';
	import Buttons from './Buttons.svelte';

	onMount(() => characters.setCharacters());
</script>

<section class="w-full px-10 md:px-16 flex items-center justify-between md:mb-6">
	<Buttons />
</section>

<main class="max-w-full p-4 flex flex-col md:flex-row md:flex-wrap space-y-6 md:space-y-0 gap-8 items-center md:justify-center">
	{#if $filtered.length === 0}
		<p>Loading...</p>
	{:else}
		{#each $filtered as character}
			<Character {character} />
		{/each}
	{/if}
</main>

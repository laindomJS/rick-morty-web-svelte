<script>
	import { term } from '../stores/characters';
	import SearchIcon from './SearchIcon.svelte';
</script>

<section class="w-fit my-8 px-4 md:px-10 relative">
	<input bind:value={$term} class="h-11 p-2 md:w-72 lg:w-96 shadow-md placeholder:italic placeholder:font-semibold text-black border-2 border-green-500" type="text" placeholder="Name of character..." />
	<SearchIcon />
</section>

<script>
	import { term } from '../stores/characters';
</script>

<section class="w-full my-8 px-4 md:px-10">
	<input bind:value={$term} class="h-10 p-2 md:w-72 shadow-md focus:border-0 placeholder:italic placeholder:font-semibold text-black" type="text" placeholder="Name of character..." />
	<button class="h-10 bg-cyan-600 w-20 font-bold">Search</button>
</section>

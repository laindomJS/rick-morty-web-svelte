<script>
	import { term } from '../stores/characters';
</script>

<section class="w-full my-8 px-4 md:px-10">
	<input bind:value={$term} class="h-10 p-2 md:w-72 shadow-md placeholder:italic placeholder:font-semibold text-black border-2 border-green-500" type="text" placeholder="Name of character..." />
</section>

<script>
	import GithubIcon from './GithubIcon.svelte';
</script>

<header class="w-full">
	<nav class="w-full flex justify-between items-center p-3 md:py-6 md:px-8 bg-slate-100 shadow-md">
		<h1 class="font-bold text-slate-800 inline md:text-xl lg:text-2xl">
			<span class="text-green-400">Rick</span>
			and
			<span class="text-yellow-500">Morty</span> App
		</h1>
		<a class="font-bold text-black decoration-none" href="https://github.com/laindomJS/rick-morty-web-svelte" target="_blank" rel="noreferrer">
			<GithubIcon />
		</a>
	</nav>
</header>

<script>
  export let character;
</script>

<article class="w-[220px] h-[360px] rounded-t-md border-2 border-blue-500 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
  <img class="w-full h-[210px] fit-contain" src={character.image} alt={character.name}>
  <div class="p-4 text-black">
    <h2 class="font-bold text-green-600 text-lg">{character.name}</h2>
    <span class="block font-bold">Status: <span class="font-normal">{character.status}</span> </span>
    <span class="font-bold">Location: <span class="font-normal">{character.location.name}</span> </span>
  </div>
</article>
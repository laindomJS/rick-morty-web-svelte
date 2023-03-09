<script>
  export let character;
</script>

<article class="w-[220px] h-[340px] rounded-t-md border-2 border-blue-500 shadow-md">
  <img class="w-full h-[200px] fit-contain" src={character.image} alt={character.name}>
  <div class="p-4 text-black">
    <h2 class="font-semibold">{character.name}</h2>
    <span class="block font-bold">Status: <span class="font-normal">{character.status}</span> </span>
    <span class="font-bold">Location: <span class="font-normal">{character.location.name}</span> </span>
  </div>
</article>
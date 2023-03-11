<script>
  export let character;
  const isAlive = () => character.status === 'Alive' ? 'font-bold text-blue-600' : 'font-bold text-red-500';
</script>

<article class="w-[230px] h-[420px] rounded-t-md border-2 border-blue-500 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
  <img class="w-full h-[220px] fit-contain" src={character.image} alt={character.name}>
  <div class="p-4 text-black">
    <h2 class="font-bold text-green-600 text-lg">{character.name}</h2>
    <span class={isAlive()}>Status: <span class="font-normal">{character.status}</span> </span> <br>
    <span class="font-bold">Location: <span class="font-normal">{character.location.name}</span> </span> <br>
    <span class="font-bold">Species: <span class="font-normal">{character.species}</span> </span> <br>
    <span class="font-bold">Gender: <span class="font-normal">{character.gender}</span> </span> <br>
  </div>
</article>
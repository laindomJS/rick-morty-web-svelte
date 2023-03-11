<script>
	import { characters } from '../stores/characters';

  const changeNextPage = () => {
    characters.nextPage();
  }

  const changePreviousPage = () => {
    characters.previousPage();
  }

</script>

<button on:click={changePreviousPage} class="button">Prev</button>
<button on:click={changeNextPage} class="button">Next</button>

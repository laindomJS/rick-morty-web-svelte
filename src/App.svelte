<script>
  import ListOfCharacters from './lib/ListOfCharacters.svelte';
  import Header from './lib/Header.svelte';
  import Input from './lib/Input.svelte';
</script>

<div class="w-full min-h-screen bg-slate-50 text-white flex justify-content items-center flex-col">
  <Header />
  <Input />
  <ListOfCharacters />
</div>


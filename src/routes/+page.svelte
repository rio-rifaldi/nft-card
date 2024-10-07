<script lang="ts">
  import Card from "$components/Card.svelte";
  import ThemeSelector from "$lib/ThemeSelector.svelte";
  import cryptoData from "../data/crypto.json";
</script>

<svelte:head > 
  <title>frontendmentor NFT card</title>  
</svelte:head>

<div class="max-w-xs">
  <ThemeSelector />
</div>
<div
  class="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-screen-xl lg:mx-auto mx-5"
>
  {#each cryptoData as cry}
    <Card
      desc={cry.description}
      imageName={cry.imageName}
      name={cry.name}
      imageIconName={cry.imageIconName}
      code={cry.code}
      owner={cry.owner}
    />
  {/each}
</div>

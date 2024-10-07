<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";
   import Img from "@zerodevx/svelte-img"

  export let imageName: string;
  export let description: string;
  export let name: string;
  export let imageIconName: string;
  const dispatch = createEventDispatcher();
  export let isOpen = true;
  const close = () => {
    isOpen = false;
    dispatch("close");
  };

  const cryptoImage = import.meta.glob(["$assets/crypto/*.webp","$assets/crypto/*.jpg","$assets/crypto/*.jpeg","$assets/crypto/*.png"],{eager:true,query: { w: 490, h: 440, fit: 'cover', as: 'run' },import:"default"})
 const cryptoImageIcon = import.meta.glob("$assets/crypto-icon/*",{eager:true,query :"url",import:"default"})
</script>

{#if isOpen}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    class="fixed z-30 top-0 left-0 w-full h-full bg-black/45"
    on:click={close}
    transition:fade={{ duration: 200 }}
  >
    <div
      class="mx-3 lg:mx-auto h-[90vh] sm:h-max overflow-scroll sm:overflow-clip sm:mt-20 mt-5 max-w-5xl bg-white dark:bg-dark-blue-two dark:text-soft-blue rounded-md shadow-md p-10 pt-16 relative"
      on:click|stopPropagation
    >
      <button
        class="p-2 rounded-full group hover:bg-red-100/50 dark:hover:bg-red-600 duration-150 text-white absolute top-3 right-3"
        on:click={close}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="icon icon-tabler icons-tabler-outline icon-tabler-x stroke-black dark:stroke-white"
          ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
            d="M18 6l-12 12"
          /><path d="M6 6l12 12" /></svg
        >
      </button>
      <div class="grid md:grid-cols-2 sm:gap-8">
        <div class="">
          <!-- svelte-ignore a11y-img-redundant-alt -->
                  
          <Img
            src={cryptoImage[`/src/assets/crypto/${imageName}`]}
            alt="nft-image"
            class="rounded-md md:h-full object-cover"
          />
          
        </div>

        <div class="space-y-5 mt-5 text-justify">
          <div class="flex gap-4">
            <!-- svelte-ignore a11y-img-redundant-alt -->
        
            <img  src={cryptoImageIcon[`/src/assets/crypto-icon/${imageIconName}`]} alt="nft-image" class="w-7" />
            
            <p class="font-semibold text-2xl dark:text-white">{name}</p>
          </div>
          <p class="md:text-lg">{description}</p>
        </div>
      </div>
    </div>
  </div>
{/if}

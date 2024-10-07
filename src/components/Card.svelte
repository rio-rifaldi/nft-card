<script lang="ts">
    import iconView from "$assets/icon-view.svg";
    import Modal from "./Modal.svelte";
    import Img from "@zerodevx/svelte-img"

  let isOpenModal = false;
  const handleClose = () => (isOpenModal = false);

  export let imageName: string;
  export let imageIconName: string;
  export let name: string;
  export let code: string;
  export let desc: string;
  export let owner: string;

const cryptoImage = import.meta.glob(["$assets/crypto/*.webp","$assets/crypto/*.jpg","$assets/crypto/*.jpeg","$assets/crypto/*.png"],{eager:true, query: { w: 240, h: 240, fit: 'cover', as: 'run' },import:"default"})
const cryptoImageIcon = import.meta.glob("$assets/crypto-icon/*",{eager:true,query :"url",import:"default"})


</script>

<Modal
  isOpen={isOpenModal}
  on:close={handleClose}
  {imageName}
  description={desc}
  {name}
  imageIconName={imageIconName}
/>
<div
  class="w-full border rounded-md p-6 font-outfit shadow-md text-black dark:text-white dark:bg-dark-blue-two dark:border-hidden"
>
  <button class="group relative w-full" on:click={() => (isOpenModal = true)}>
    <div
      class="hidden group-hover:inline absolute z-20 left-0 right-0 m-auto w-fit bottom-1/2 top-1/3"
    >
      <img src={iconView} alt="imge view" class="block mx-auto" />
      <p class="text-white">click to preview details</p>
    </div>

        <Img
          src={cryptoImage[`/src/assets/crypto/${imageName}`]}
          alt={name}
          class="rounded-lg group-hover:brightness-50 duration-200 w-full h-64 object-cover"
        />
     
  </button>

  <div class="space-y-3 my-4">
    <h1 class="font-semibold text-lg">{name}</h1>
    <p class=" line-clamp-2 dark:text-soft-blue text-sm sm:text-base">{desc}</p>

    <div class="flex justify-between text-[.9rem]">
      <div
        class="flex gap-2 text-dark-blue-two font-semibold items-center text-blue-800 dark:text-cyan"
      >

        <img src={cryptoImageIcon[`/src/assets/crypto-icon/${imageIconName}`]} alt={`icon-nft ${name}`} class="w-5" />

          
        <p>0.041</p>
        <p>{code}</p>
      </div>

      <p
        class=" before:content-[url('../assets/icon-clock.svg')] before:mr-2 dark:text-slate-400/90"
      >
        3 days left
      </p>
    </div>
  </div>
  <!-- text-slate-400/80 -->

  <div class=" border-t-[1px] pt-4 flex gap-3 items-center text-sm sm:text-base">
    <img
      src={`https://i.pravatar.cc/100?u=${code}`}
      alt="avatar"
      class="w-10 rounded-full"
    />
    <p class="">Creation of <span class="dark:text-soft-blue">{owner}</span></p>
  </div>
</div>

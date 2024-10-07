<script>
  import "../styles/style.css";
  import { BrowserThemeStore } from "$lib/theme";
</script>

<div class="{$BrowserThemeStore} ">
  <div class="dark:bg-dark-blue-one">
    <slot />
  </div>
</div>

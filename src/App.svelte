<script lang="ts">
    import Example from './Example.svelte';
    import './app.css';
    import LogoIcon from './icons/Logo.svelte'
    export let size: string;
    export let front_url: string = "http://localhost:4200";
</script>

<LogoIcon iconClass="w-16 block mx-auto text-purple-500" />
<h1 class="text-xl text-center text-blue-500">Svelte Boilerplate</h1>
<p class="text-center">{front_url}</p>
      {#if size}
        Un paramètre taille de {size} a été donné
      {/if}
<Example />

<style lang="postcss">
</style>
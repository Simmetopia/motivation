<script>
  import { quotes } from "./_utils/stores.js";
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";

  let theQuote = "";
  const animationDuration = 1000;

  function getRandNum() {
    return Math.floor(Math.random() * $quotes.length);
  }
  let whichToRender = false;

  onMount(() => {
    theQuote = $quotes[getRandNum()];
    const intervalId = window.setInterval(() => {
      theQuote = $quotes[getRandNum()];
      whichToRender = !whichToRender;
    }, 7000);
    return () => {
      window.clearInterval(intervalId);
    };
  });
</script>

<style>
  div {
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 3em;
  }
  h1 {
    text-align: center;
  }
  @media only screen and (max-width: 600px) {
    div {
      font-size: 1em;
    }
  }
</style>

<svelte:head>
  <title>Motivator</title>
</svelte:head>
<div>
  {#if whichToRender}
    <img src="it-minds_logo.png" alt="winkingfig" />
    <h1 in:fly={{ duration: animationDuration, y: -500 }}> {theQuote} </h1>
  {:else}
    <img src="it-minds_logo.png" alt="winkingfig" />
    <h1 in:fly={{ duration: animationDuration, x: 500 }}> {theQuote} </h1>
  {/if}
</div>

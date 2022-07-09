<script>
    import {useMachine} from "@xstate/svelte"
import { afterUpdate, beforeUpdate, onDestroy, onMount } from "svelte";
    import ReadMoreMachine from "./ReadMoreMachine"
   export let content;
  //  let subscribe_state;
    const {state, send} = useMachine(ReadMoreMachine, {
    context: {
      content,
      textToShow:content
    }
  });
    // state.subscribe((val)=>{
    //     subscribe_state=val
    // })
    let textDisplay;
    afterUpdate(()=>{
      console.log("AFTER UPDATE");
      const {context}=$state;
  const {textToShow}=context;
  textDisplay=textToShow
  console.log(textToShow);
    })
    beforeUpdate(()=>{

console.log("BEFORE UPDATE");
})

</script>
<div>
    <p>
        {textDisplay}
        <span>(Actual Text length:{content.length})</span>
      {#if $state.value === "disabled" }
        { ''}
      {:else}
      <button on:click={() => send("TOGGLE_CLIP")}> Read More</button>
      {/if}
    </p>
    {$state.value}
  </div>
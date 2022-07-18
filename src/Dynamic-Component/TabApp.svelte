<script>
    import TabA from "./TabA.svelte";
    import TabB from "./TabB.svelte";
    import TabC from "./TabC.svelte";
    // let activeTab='TabA'
    let activeTab=TabA;
</script>

<main>
    <!-- <button on:click={()=>(activeTab='TabA')}>Tab A</button>
    <button on:click={()=>(activeTab='TabB')}>Tab B</button>
    <button on:click={()=>(activeTab='TabC')}>Tab C</button>
    {#if activeTab==='TabA'}
    <TabA/>
    {/if}
    {#if activeTab==='TabB'}
    <TabB/>
    {/if}
    {#if activeTab==='TabC'}
    <TabC/>
    {/if} -->
    <button on:click={()=>(activeTab=TabA)}>Tab A</button>
    <button on:click={()=>(activeTab=TabB)}>Tab B</button>
    <button on:click={()=>(activeTab=TabC)}>Tab C</button>
    <svelte:component this={activeTab}/>
</main> 
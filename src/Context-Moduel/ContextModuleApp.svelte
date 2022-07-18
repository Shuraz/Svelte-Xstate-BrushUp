<script>
    import Counter,{getTotalCount} from './Counter.svelte'
    const handleTotalClick=()=>{
        alert(getTotalCount())
    }
</script>
<button on:click={handleTotalClick}>Alert Total Count</button>
<Counter/>
<Counter/>
<Counter/>
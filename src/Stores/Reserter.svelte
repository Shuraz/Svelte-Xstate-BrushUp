<script>
    import {count} from "./stores"
    const handleReset=()=>{
        count.set(0)
    }
</script>
<button on:click={handleReset}>Reset</button>
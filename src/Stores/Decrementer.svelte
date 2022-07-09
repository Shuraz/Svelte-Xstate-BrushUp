<script>
    import {count} from './stores'
const handleDecrement=()=>{
    count.update(n=>n-1)
}
</script>
<button on:click={handleDecrement}>-</button>
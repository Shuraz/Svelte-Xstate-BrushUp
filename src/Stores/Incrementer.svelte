<script>
import {count} from './stores'
const handleIncrement=()=>{
    count.update(n=>n+1)
}
</script>
<button on:click={handleIncrement}>+</button>
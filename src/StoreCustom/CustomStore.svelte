<script>
    import {count} from "./stores"

</script>
<h4>Custom Store</h4>
<h5>The Count is: {$count}</h5>
<button on:click={count.increment}>+</button>
<button on:click={count.decrement}>-</button>
<button on:click={count.reset}>Reset</button>
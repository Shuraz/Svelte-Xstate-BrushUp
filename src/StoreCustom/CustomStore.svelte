<script>
    import {customCount} from "./stores"

</script>
<h4>Custom Store</h4>
<h5>The Count is: {$customCount}</h5>
<button on:click={()=>customCount.increment()}>+</button>
<button on:click={()=>customCount.decrement()}>-</button>
<button on:click={()=>customCount.increment(5)}>+5</button>
<button on:click={()=>customCount.decrement(5)}>-5</button>
<button on:click={()=>customCount.reset()}>Reset</button>
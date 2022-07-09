<script>
    import {count} from "./stores"
    import Incrementer from "./Incrementer.svelte"
    import Decrementer from "./Decrementer.svelte"
    import Reserter from "./Reserter.svelte"
    let countValue;
   const unsubscribe= count.subscribe(value=>{
        countValue=value
    })
</script>
<h4>Writable Stores</h4>
<h5>The Count is: {countValue}</h5>
<h5>Auto Subscription of Count: {$count}</h5>
<Incrementer/>
<Decrementer/>
<Reserter/>
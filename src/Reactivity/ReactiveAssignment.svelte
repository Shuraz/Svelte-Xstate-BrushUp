<script>
    import { beforeUpdate, afterUpdate,onMount } from 'svelte';
    let count =0;
    const handleClick=()=>{
        count+=1;
    }
    afterUpdate(()=>{
        console.log("after Update")
    })
    beforeUpdate(()=>{
console.log("before Update")
    })
    onMount(()=>{
        console.log("on Mount")
    })

</script>
<h1>{count}</h1>
<button on:click={handleClick}>Count To Add: {count}{count===1?' time ':' times '}</button>
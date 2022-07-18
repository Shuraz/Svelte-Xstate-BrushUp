<script context="module">
let totalCount=-0;
export function getTotalCount(){
    return totalCount;
}
</script>
<script>
    let count =0;
    const countHandler=()=>{
        count+=1;
        totalCount+=1;
    }
</script>
<h2>Total Count: {totalCount  }</h2>
<h2>Count : {count}</h2>
<button on:click={countHandler}>Increment</button>

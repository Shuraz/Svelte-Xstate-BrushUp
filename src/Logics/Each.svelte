<script>
    let data = [
        {id:1,name:"Apple"},
        {id:2,name:"Banana"},
        {id:3,name:"Carrot"}
    ]
</script>
<h4>Each Statement</h4>
{#each data as {id,name},i}
<p>{i+1}:{name}</p>
{/each}
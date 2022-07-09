<script>
    let count =1;

    $:if(count>15){
        alert(`Temp is very high.`);
        count =15;
    }
    const handleCount =()=>{
        count +=1;
    }


</script>
<h1>Reactive Statement</h1>
<button on:click={handleCount}>Press To Add</button>
<h2>Temperature is : {count}</h2>
    {#if count>10}
    <h4>Temperature is High!!</h4>
    {/if}

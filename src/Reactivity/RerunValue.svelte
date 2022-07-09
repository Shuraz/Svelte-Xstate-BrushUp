<script>
    let count =1;
    $:double = count *2;
    $:quadruple=double * 2;
    const clickHandle=()=>{
        count +=1;
    }
</script>
<h1>Re Run Value</h1>
<button on:click={clickHandle}>Add On</button>

<h1>{count}</h1>
<h2>{double}</h2>
<h2>{quadruple}</h2>
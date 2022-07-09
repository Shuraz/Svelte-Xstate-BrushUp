<script>
    import Info from "./Info.svelte"
    const data ={
        name:"Ram",
        age:15,
        address:"Auburn",
        phone:"12323234"
    }
</script>
<h1>Spread Props</h1>
<Info {...data}/>
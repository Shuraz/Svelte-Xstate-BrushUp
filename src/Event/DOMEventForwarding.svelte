<script>
    import CustomButton from "./CustomButton.svelte";
    const handleClick=()=>{
        alert("button Clicked")
    }
</script>
<h4>CustomButton</h4>
<CustomButton on:click={handleClick}/>
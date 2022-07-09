<script>
    import Outer from './Outer.svelte'
    const handleMessage=(e)=>{
        alert(e.detail.text);
    }
</script>
<h4>EventForwarding</h4>
<Outer on:message={handleMessage}/>
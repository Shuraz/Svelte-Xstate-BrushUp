<script>
    import Inner from './Inner.svelte'
    const handelMessage=(event)=>{
        alert(event.detail.text)
    }
</script>
<h4>ComponentEvent</h4>
<Inner on:message={handelMessage}/>
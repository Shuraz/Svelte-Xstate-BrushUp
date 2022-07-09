<script>
    let user = {logedIn:false}
    const toggle =()=>{
        user.logedIn=!user.logedIn;
    }
</script>
<h4>If Statement</h4>
{#if user.logedIn}
    <button on:click={toggle}>Loged Off</button>
{/if}

{#if !user.logedIn}
<button on:click={toggle}>Loged In</button>
{/if}

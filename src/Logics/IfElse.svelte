<script>
    let user = {logedIn:false}
    const toggle =()=>{
        user.logedIn=!user.logedIn;
    }
</script>
<h4>If Else Statement</h4>

{#if user.logedIn}
<p>Welcome to your Account</p>
    <button on:click={toggle}>Loged Off</button>
{:else}
<button on:click={toggle}>Loged In</button>
{/if}
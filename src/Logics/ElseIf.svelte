<script>
    let x=41
</script>
<h4>Else If Statement</h4>
{#if x >=60}
<p>First Division</p>
{:else if x>=50}
<p>Second Division</p>
{:else if x>=40}
<p>Third Division</p>  
{:else if x>=32}
<p>Pass</p>  
{:else if x<32}
<p>Fail</p>
{:else}
<p>Invalid</p>
{/if}
<script>
    let scoops=1;
    let flavours=['Mint Choc Chips'];
    let menu=[
        'Cookies Cream',
        'Mint Choc Chips',
        'Raspberry Ripple'
    ]
    const join=(flavours)=>{
        if(flavours.length===1) return flavours[0]
        return `${flavours.slice(0,-1).join(', ')} and ${flavours[flavours.length-1]}} `
    }
</script>
<h2>Size</h2>
<label>
    <input type="radio" bind:group={scoops} value={1}>
    One Scoop
</label>
<label>
    <input type="radio" bind:group={scoops} value={2}>
    Two Scoops
</label>
<label>
    <input type="radio" bind:group={scoops} value={3}>
    Three Scoops
</label>
<h2>Flavours</h2>
{#each menu as flavour }
<label>
    <input type="checkbox" bind:group={flavours} value={flavour}>
    { flavour}
</label>
{/each}

{#if flavours.length<1}
<p>Please select atlest one flavour.</p>
{:else if flavours.length>scoops}
<p>You have selected more flavours than the number of scoops.</p>
{:else}
<p>Processing... You have ordered {scoops} {scoops===1?'scoop':'scoops'} of {join(flavours)}</p>
{/if}
<script>
    import {onMount} from "svelte";
    let photos=[];
    onMount(async()=>{
        const resp= await fetch("https://svelte.dev/tutorial/api/album");
        console.log(resp)
        photos = await resp.json();
        console.log(photos)

    })
</script>
<h4>onMount</h4>
<h5>Photo Album</h5>
<div class="photo">
    {#each photos as photo}
    <figure>
        <img src={photo.thumbnailUrl} alt={photo.title}>
        <figcaption>{photo.title}</figcaption>
    </figure>
    {:else}
    <!-- this block render if photos.length===0 -->
    <p>...Loading</p>
    {/each}

</div>
<style>
    .photo{
        width: 100%;
        display:grid;
        grid-template-columns: repeat(5,1fr);
        gap: 8px;
    }
    figure, img {
		width: 100%;
		margin: 0;
	}
</style>
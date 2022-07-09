<script>
import DisplayText from "./DisplayText.svelte"
import data from "./data"
</script>
<h4>AppXstate4</h4>
<div>
    <h2>Content</h2>
    <!-- {data.map((item) => (
      <DisplayText content={item} key={item} />
    ))} -->
    {#each data as item}
    <DisplayText content={item}/>
    {/each}
  </div>
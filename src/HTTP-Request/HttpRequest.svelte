<script>
import {onMount} from 'svelte';
import { each } from 'svelte/internal';
let posts=[];
onMount(async()=>{
const response=await fetch("https://jsonplaceholder.typicode.com/posts");
posts=await response.json();
//console.log(response);
console.log(posts);
})
</script>

{#each posts as post (post.id) }
    <h4>{post.id}: {post.title}</h4>
    <p>{post.body}</p>
    <hr/>
{/each}

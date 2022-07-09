<script>
    import {createEventDispatcher} from 'svelte'
    const dispatch= createEventDispatcher();
    let name="";
const sayHello=()=>{
    dispatch('message',{text:`Hello ${name}`})
}
</script>
<p>

   Hello {name||'Stranger'}!!
</p>
<input bind:value={name} type="text"/>
<button on:click={sayHello}>Click</button>
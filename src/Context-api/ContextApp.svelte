<script>
import ComponentA from "./ComponentA.svelte";
import {setContext} from 'svelte'
const userName="Suraj"
setContext('username-context',userName);
</script>
<h2>App Component username - {userName}</h2>
<ComponentA/>
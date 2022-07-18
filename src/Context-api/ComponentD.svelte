<script>
    import {getContext} from 'svelte'
    const userName= getContext('username-context')
</script>
<h2>Component D</h2>
<h3>Child D get the username : {userName}</h3>
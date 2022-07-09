<script>
    let questions=[
        {id:1,text:"What is the name of your first School?"},
        {id:2,text:"What is the name of the town you were born?"},
        {id:3,text:"What is the name of the month your mother born?"}
    ]
    let selected=''
    let answer='';

const handleSubmit=()=>{
    alert(`answer question ${selected.id} ${selected.text} with answer ${answer}`)
}
</script>
<h4>Select Binding</h4>
<form on:submit|preventDefault={handleSubmit}>
    <select bind:value={selected} on:change={() => answer = ''}>
        {#each questions as question }
        <option value={question}>{question.text}</option>
        {/each}
    </select><br>
    <input bind:value={answer}>
    <br>
    <button type="submit" disabled={!answer}>Submit</button>
</form>
<p>Selected Question: {selected?selected.id:'[waiting...]'}</p>
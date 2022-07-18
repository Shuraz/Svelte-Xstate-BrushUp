<script>
    const formValues={
        name:'',
        profileSumary:'',
        country:'',
        jobLocation:[],
        remoteWork:false,
        skillSets:[],
        yearsOfExperience:''
    }
    const handleSubmit=()=>{
        console.log(formValues)
    }
</script>
<main>
    <div>
        <pre>
            {JSON.stringify(formValues,null,2)}
        </pre>
    </div>
    <form on:submit|preventDefault={handleSubmit}>
        <div>
            <label for="name">Name</label>
            <input type="text" id="name" bind:value={formValues.name}>
        </div>
        <div>
            <label for="profile">Profile Summary</label>
            <textarea id="profile" bind:value={formValues.profileSumary}></textarea>
        </div>
        <div>
            <label for="country">Country</label>
            <select id="country" bind:value={formValues.country}>
                <option value="">Select a Country</option>
                <option value="nepal">Nepal</option>
                <option value="india">India</option>
                <option value="china">China</option>
                <option value="australia">Australia</option>
            </select>
        </div>
        <div>
            <label for="job-location">Job Location</label>
            <select id="job-location" bind:value={formValues.jobLocation} multiple>
                <option value="">Select a Country</option>
                <option value="nepal">Nepal</option>
                <option value="india">India</option>
                <option value="china">China</option>
                <option value="australia">Australia</option>
            </select>
        </div>
        <div>
            <input type="checkbox" id="remoteWork" bind:checked={formValues.remoteWork}>
            <label for="remoteWork">Open to remote work?</label>
        </div>
        <div>
            <label for="">Skills Set</label>
            <input type="checkbox" id="html" value="html" bind:group={formValues.skillSets}>
            <label for="html">HTML</label>
            <input type="checkbox" id="html" value="css" bind:group={formValues.skillSets}>
            <label for="css">CSS</label>
            <input type="checkbox" id="js" value="js" bind:group={formValues.skillSets}>
            <label for="js">JS</label>
        </div>
        <div>
            <label for="">Years of Experience</label>
            <input type="radio" id="0-2" value="0-2" bind:group={formValues.yearsOfExperience}>
            <label for="0-2">0-2</label>
            <input type="radio" id="2-4" value="2-4" bind:group={formValues.yearsOfExperience}>
            <label for="02-4">2-4</label>
            <input type="radio" id="0-2" value="4-8" bind:group={formValues.yearsOfExperience}>
            <label for="4-8">4-8</label>
        </div>
        <button>Summit Form</button>
    </form>

</main>
<style>
    input + label{
        display: inline-flex;
    }
</style>
<script>
    import {time, elapsedTime} from './store';
    const dateForamtter = new Intl.DateTimeFormat('en',{
        hour12:true,
        hour:'numeric',
        minute:'2-digit',
        second:'2-digit'
    })
    // console.log($elapsedTime)
</script>
<h2>readable Store</h2>
<h3>The time is : {dateForamtter.format($time)}</h3>
<!-- <h3>You've been viewing page for : {$elapsedTime}</h3> -->
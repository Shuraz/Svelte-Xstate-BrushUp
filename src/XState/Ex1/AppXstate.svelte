<!-- <script>
    import {interpret} from 'xstate';
    import {toggleMachine} from './machine';

    let current;

    const toggleService = interpret(toggleMachine)
        .onTransition((state) => {
            current = state;
        }).start()
</script>
<h4>XState</h4>

<button on:click={() => toggleService.send('TOGGLE')}>
    {current.matches('inactive') ? 'Off' : 'On'}
</button> -->

<script>
    import {interpret} from 'xstate';
    import {toggleMachine} from './machine';

    const toggleService = interpret(toggleMachine).start();
</script>
<h4>AppXstate</h4>
<button on:click={() => toggleService.send('TOGGLE')}>
    {$toggleService.matches('inactive') ? 'Off' : 'On'}
</button>
<script>
    import {useMachine} from "@xstate/svelte"
    import  CheckBoxMachine from "./CheckBoxMachine";
    const {state, send} = useMachine(CheckBoxMachine);
    // ******** $ replace subscribe ********
    // let subscribe_state;
    // state.subscribe((val)=>{
    //     subscribe_state=val
    // })
    // console.log(subscribe_state);
    // console.log(subscribe_state.value)
</script>
<h4>Toggle ON/OFF</h4>
<button on:click={()=>send("TOGGLE_SWITCH")}>Toggle Button</button>
<br>
<input type="checkbox" checked={$state.value==="switched_on"}>
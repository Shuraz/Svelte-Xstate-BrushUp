<script>
    import { useMachine } from "@xstate/svelte";
    import lightMachine from "./lightMachine";
  
    const { state, send } = useMachine(lightMachine);
  
    const onClick = () => {
      send("TRANS");
    };
  </script>
  
  <style>
    .light {
      width: 50px;
      height: 50px;
      border-radius: 100%;
    }
  </style>
  
  <main>
      <h4>AppXstate2</h4>
    <div class="light" style={`background: ${$state.value};`}></div>
    <button on:click={onClick}>click</button>
  </main>
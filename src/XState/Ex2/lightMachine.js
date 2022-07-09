import { createMachine } from "xstate";

const lightMachine = createMachine({
  id: "light",
  initial: "red",
  states: {
    red: {
      on: {
        TRANS: "green"
      }
    },
    green: {
      on: {
        TRANS: "yellow"
      }
    },
    yellow: {
      on: {
        TRANS: "red"
      }
    }
  }
});

export default lightMachine;
import { createMachine } from "xstate";

const CheckBoxMachine = createMachine({
  states: {
    switched_off: {
      on: {
        TOGGLE_SWITCH: {
          target: "switched_on"
        }
      }
    },
    switched_on: {
      on: {
        TOGGLE_SWITCH: {
          target: "switched_off"
        }
      }
    }
  },
  initial: "switched_off"
});
export default CheckBoxMachine;
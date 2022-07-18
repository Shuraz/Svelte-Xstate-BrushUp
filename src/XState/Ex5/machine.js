import { createMachine } from 'xstate'

export {createMachine} from 'xstate'

export const loadingMachine = 
/** @xstate-layout N4IgpgJg5mDOIC5QAcCGBPAtmAdgFwDoBLCAGzAGIBlAVQCEBZASQBVEUB7WIvIjndiAAeiALQAmAGwBGAgAYALAoCcymQGZlC9QA4dAGhDox4hToIB2HeItabttQFYFAXxeG0WXIVIdUEIhwoCgAFAEEATQYAUQA5FgB9ACVogGFopgA1aIARQWQuHj4BJGFERwsCR3FHdTldR2lHHWUpQ2MECS0CcWsdOUkrSTUdZzcPDGx8Al9-QODwqLjEgDEwpgAZXPzC3n5BEU6pWUUVNWlNbT12sXUlSz7pVuVHLTlHcZBPKcIwACc-hw-tR6Mw2KUCtw9iVQIcJDJ5EpVBotLoDEYTGoHr0BkMRmNPjgOBA4PlJt5iGQwDsocUDrdRoiznJpHIBqZ0R0JM5sbYKjoLBY2e9Pt8KbMAkEaUV9qU4Tp1PIdApFMNlOomgpnDdOnU5D0+nJrGpBuJReTpv9AX9pdD6bq9AQVDppBd1BZqip1DrRHdFUiFJJhq7moNzV5prAAK4AYxjcHgEN2dLliBq5nEvQUUmGZjVPr1BpsLvU7sk-Qs4Z+tpTsLECmk4idyhdbo9pnVPoblSsvTu1m0Tw+bhcQA */
createMachine({
  id: "payment",
  initial: "idle",
  states: {
    idle: {
      on: {
        SUBMIT: {
          target: "loading",
        },
      },
    },
    loading: {
      on: {
        PAYMENT_RECEIVED: {
          target: "success",
        },
        PAYMENT_FAILED: {
          target: "error",
        },
      },
    },
    error: {
      on: {
        SUBMIT: {
          target: "loading",
        },
      },
    },
    success: {
      type: "final",
    },
  },
});
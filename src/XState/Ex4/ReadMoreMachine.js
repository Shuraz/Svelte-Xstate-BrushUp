
import { createMachine , assign} from "xstate";

const ReadMoreMachine = createMachine(
    {
      initial: "unknown",
      states: {
        unknown: {
          always: [
            {
              target: "disabled",
              cond: "textLessThan200"
            },
            {
              target: "clipped"
            }
          ]
        },
        clipped: {
          onEntry:"clip",
          on: {
            TOGGLE_CLIP: "unclipped"
          }
        },
        unclipped: {
          onEntry:"unclip",
          on: {
            TOGGLE_CLIP: "clipped"
          }
        },
        disabled: {
          onEntry: "logDisabled"
        }
      }
    },
    {
      guards: {
        textLessThan200: function (context) {
          //console.log(context)
          return context.content.length < 200;
        }
      },
      actions: {
        logDisabled: function (context) {
          console.log("We are in Disabled State for :", context.content);
          return null;
        },
        clip:assign(function(context){
          // console.log("We are in clip State for :", context.content);
          console.log("refreshing machine clip")
          return{
            content:context.content,
            textToShow:context.content.slice(0,200)
          }
        }),
        unclip:assign(function(context){
          // console.log("We are in unclip State for :", context.content);
          console.log("refreshing machine unclip")
          return{
            context:context.content,
            textToShow:context.content
          }
        })
      }
    }
  );

  export default ReadMoreMachine;
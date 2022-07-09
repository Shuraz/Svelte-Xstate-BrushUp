const data=[
    "What's XState ? XState is a library that will allow us to create and interpret FSMs and statecharts. Its core is framework agnostic, and there are utilities for many of them.",
    "🔗 Our first state machine with Svelte. We'll start from a basic component, add features to it, and then we'll create a state machine that will have the same behavior. Let's create a new project.",
  "Our component is working, but let's say we would like to avoid reaching a count below 0 or above 10, we would have to add a guard to avoid calling the increment or decrement functions when the minimum or maximum values are reached.",
  "First, we define the states, and events that our state machines will have and respond to: Our initial counter had only one st ate, and one possible event. Then, we define a function that will respond to that event, taking the state machine context, and adding 1 to the context count. Next, we use the @xstate/svelte method useMachine that will return the state of the machine, and a method to send events to it. Note that state is a Svelte store that you can subscribe to, to get the current state of the machine using the $ prefix.In this example, $state.context.count is updated each time Events.Increment is sent.To add the decrement functionality, we just need to add a new event and the corresponding handler."
  ];
  
  export default data;
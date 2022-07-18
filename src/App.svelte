<script>
  export let name;
  import HtmlTag from "./Reactivity/HtmlTag.svelte";
  import ReactiveAssignment from "./Reactivity/ReactiveAssignment.svelte";
  import RerunValue from "./Reactivity/RerunValue.svelte";
  import ReactiveStatement from "./Reactivity/ReactiveStatement.svelte";
  import PropsDeclaration from "./Props/PropsDeclaration.svelte";
  import SpreadProps from "./Props/SpreadProps.svelte";
  import IfBlock from "./Logics/IfBlock.svelte";
  import IfElse from "./Logics/IfElse.svelte";
  import ElseIf from "./Logics/ElseIf.svelte";
  import Each from "./Logics/Each.svelte";
  import ComponentEvent from "./Event/ComponentEvent.svelte";
  import EventForwarding from "./Event/EventForwarding.svelte";
  import DOMEventForwarding from "./Event/DOMEventForwarding.svelte";
  import GroupInputs from "./Bindings/GroupInputs.svelte";
  import SelectBinding from "./Bindings/SelectBinding.svelte";
  import OnMount from "./LifeCycle/OnMount.svelte";
  import WritableStore from "./Stores/WritableStore.svelte";
  import CustomStore from "./StoreCustom/CustomStore.svelte";
  import NamedSlot from "./Slot/NamedSlot.svelte";
  import AppXstate from "./XState/Ex1/AppXstate.svelte";
  import AppXstate2 from "./XState/Ex2/AppXstate2.svelte";
  import AppXstate3 from "./XState/Ex3/AppXstate3.svelte";
  import AppXstate4 from "./XState/Ex4/AppXstate4.svelte";
  import ContextApp from "./Context-api/ContextApp.svelte";
  import HttpRequest from "./HTTP-Request/HttpRequest.svelte";
  import AutoFocusApp from "./this-binding/AutoFocusApp.svelte";
  import TabApp from "./Dynamic-Component/TabApp.svelte";
  import ContextModuleApp from "./Context-Moduel/ContextModuleApp.svelte";
  import FormApp from "./Form/FormApp.svelte";
  import ReadableStore from './Store-Readable/ReadableStore.svelte'
</script>

<main>
  <h1>Hello {name}!</h1>
  <h5>Brush of Your Svelte!!!</h5>
</main>
<!-- <HtmlTag/> -->
<!-- <ReactiveAssignment/> -->
<!-- <RerunValue/> -->
<!-- <ReactiveStatement/> -->
<!-- <PropsDeclaration/> -->
<!-- <SpreadProps/> -->
<!-- <IfBlock/> -->
<!-- <IfElse/> -->
<!-- <ElseIf/> -->
<!-- <Each/> -->
<!-- <ComponentEvent/> -->
<!-- <EventForwarding/> -->
<!-- <DOMEventForwarding/> -->
<!-- <GroupInputs/> -->
<!-- <SelectBinding/> -->
<!-- <OnMount/>   -->
<!-- <WritableStore/> -->
<CustomStore/>
<!-- <NamedSlot/> -->
<!-- <AppXstate /> -->
<!-- <AppXstate2 /> -->
<!-- <AppXstate3 /> -->
<!-- <AppXstate4 /> -->
<!-- <ContextApp/> -->
<!-- <HttpRequest/> -->
<!-- <AutoFocusApp/> -->
<!-- <TabApp/> -->
<!-- <ContextModuleApp/> -->
<!-- <FormApp/> -->
<!-- <ReadableStore/> -->
<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

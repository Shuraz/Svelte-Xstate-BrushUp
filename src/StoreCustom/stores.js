import { writable } from "svelte/store";
// custom Stores
// https://www.youtube.com/watch?v=9phWUxdBuSM&list=PLC3y8-rFHvwiYZOsc2D8AO1MYwLjZQrKx&index=34
function createCount(){
    const {subscribe,set,update}=writable(0);
    return{
        subscribe,
        increment:(size=1)=>update((n)=>n + size),
        decrement:(size=1)=>update((n)=>n - size),
        reset:()=>set(0) 
    }
}
export const customCount = createCount();
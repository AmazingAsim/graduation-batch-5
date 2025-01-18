import {createSlice} from '@reduxjs/toolkit'

let counterSlice = createSlice({
    name:"counter",
    initialState:{count:1},
    reducers:{
        Increment:(state,action)=>{state.count = state.count +1},
        Decrement:(state,action)=>{state.count = state.count -1},
        setCount:(state,action)=>{state.count = action.payload}
    }
});

export let {Increment,Decrement,setCount} = counterSlice.actions;
export default counterSlice.reducer;
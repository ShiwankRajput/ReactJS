import { createSlice } from "@reduxjs/toolkit";


//creating counter slice
const counterSlice = createSlice({
    name: 'counter',
    initialState: {counterVal: 0},
    reducers: {
        increment: (state,action)=>{
            state.counterVal++;
        },
        decrement: (state,action)=>{
            state.counterVal--;
        },
        addition: (state,action)=>{
            state.counterVal += Number(action.payload.num);
        },
        subtraction: (state,action)=>{
            state.counterVal -= Number(action.payload.num);
        }
    }
})

//here actions are export,there is no need to use dispatch by user to dispatch action
export const counterAction = counterSlice.actions;

export default counterSlice;
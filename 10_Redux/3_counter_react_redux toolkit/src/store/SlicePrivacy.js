import { createSlice } from "@reduxjs/toolkit";


//creating privacy toggle slice
const privacySlice = createSlice({
    name: 'privacy',
    initialState: false,
    reducers:{
        toggle: (state,action)=>{
            return state = !state;
        }
    }
})

//here actions are export,there is no need to use dispatch by user to dispatch action
export const privacyAction = privacySlice.actions;

export default privacySlice;
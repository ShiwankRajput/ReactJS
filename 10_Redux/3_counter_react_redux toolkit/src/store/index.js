import {configureStore, createSlice} from "@reduxjs/toolkit"
import privacySlice from "./SlicePrivacy";
import counterSlice from "./SliceCounter";


const counterStore = configureStore({
    reducer : {
        counter: counterSlice.reducer,
        privacy: privacySlice.reducer
    }
})


export const privacyAction = privacySlice.actions;

export default counterStore;






//reducer function
/*const counterReducer = (store = INITIAL_VALUE, action)=>{
    
    let newStore = store

    if(action.type === "INCREMENT"){
        newStore = {...store, counter: store.counter+1,}
    }
    else if(action.type === "DECREMENT"){
        newStore = {...store, counter: store.counter-1}
    }
    else if(action.type === "ADD"){
        newStore = {...store, counter: store.counter + Number(action.payload.num)}
    }
    else if(action.type === "SUB"){
        newStore = {...store, counter: store.counter - Number(action.payload.num)}
    }
    else if(action.type === "PRIVACY_TOGGLE"){
        newStore = {...store, privacy: !store.privacy}
    }

    return newStore;
}*/
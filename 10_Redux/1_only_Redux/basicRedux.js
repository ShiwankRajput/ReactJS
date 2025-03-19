const redux = require('redux');

const INITIAL_VALUE = {
    counter : 0
}

//reducer
const reducer = (store = INITIAL_VALUE,action)=>{

    let newStore = store;

    if(action.type === "INCREMENT"){
        newStore = {counter: newStore.counter+1};
    }
    else if(action.type === "DECREMENT"){
        newStore = {counter: newStore.counter-1};
    }
    else if(action.type === "ADDITION"){
        newStore = {counter: newStore.counter + action.payload.number}
    }
    else if(action.type === "SUBTRACTION"){
        newStore = {counter: newStore.counter - action.payload.number}
    }

    return newStore;
    
}

//store
const store = redux.createStore(reducer)

//subscribe
const subscriber = ()=>{
    const state = store.getState()
    console.log(state);
}

store.subscribe(subscriber);

//action
store.dispatch({type: "INCREMENT"})
store.dispatch({type: "DECREMENT"})
store.dispatch({type: "ADDITION", payload: {number: 5}})
store.dispatch({type: "SUBTRACTION", payload: {number: 3}})
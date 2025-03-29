const redux = require('redux')

const INITIAL_VALUE = {
    counter: 0
}

const reducer = (state = INITIAL_VALUE,action)=>{
    let newStore = state;

    if(action.type === 'INCREMENT'){
        newStore = {counter: state.counter+1}
    }
    else if(action.type === 'DECREMENT'){
        newStore = {counter: state.counter-1}
    }
    else if(action.type === 'ADD'){
        newStore = {counter: state.counter + action.payload.num}
    }

    return newStore;
    
}

const store = redux.createStore(reducer)

const subscriber = ()=>{
    const state = store.getState();
    console.log(state);
}

store.subscribe(subscriber)

store.dispatch({type:'INCREMENT'});
store.dispatch({type:'INCREMENT'});
store.dispatch({type:'DECREMENT'});
store.dispatch({type:'INCREMENT'});
store.dispatch({type:'INCREMENT'});
store.dispatch({type:'ADD',payload:{num: 4}});




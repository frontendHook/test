const redux = require('redux');

const initialState = {
    counter:0
}


const reducer = (state = initialState ,action)=>{
    switch (action.type) {
        case 'PLUS':
            return {...state,counter: state.counter + 1}
        case 'MINUS':
            return {...state,counter: state.counter - 1}
        case 'MANY':
            return {...state,counter: state.counter + action.payload}
        default:
            return state
    }

}


const store = redux.createStore(reducer);

console.log('initialState',store.getState());

store.subscribe(()=>{
    console.log(store.getState())
})

const plusCounter = {
    type: 'PLUS'
}

const minusCounter = {
    type: 'MINUS'
}

const manyCounter = {
    type:'MANY',
    payload:100
}

store.dispatch(plusCounter);
store.dispatch(minusCounter);
store.dispatch(manyCounter);




const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

/**
 * Action creator function
 * @returns the action object
 */
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'    
    }
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM
    }
}

// const initialState = {
//     numOfCakes: 10,
//     numOfIceCreams: 20
// }

const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numOfIceCreams: 20
}

/**
 * Reducer function (previousState, action) => newState)
 * @param state 
 * @param action 
 * @returns 
 */
// const reducer = (state = initialState, action) => {
//     switch(action.type) {
//         case BUY_CAKE: return {
//             ...state,
//             numOfCakes: state.numOfCakes - 1
//         }

//         case BUY_ICECREAM: return {
//             ...state,
//             numOfIceCreams: state.numOfIceCreams - 1
//         }

//         default: return state
//     }
// }

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        default: return state
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }

        default: return state
    }
}

// Note: When we dispatch an action, both reducers receive that action
// One of them acts on it and other just ignores it
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
});
const store = createStore(rootReducer);

console.log(`Initial state: ${JSON.stringify(store.getState(), undefined, 2)}`);

const unSubscribe = store.subscribe(() => console.log(`Updated state: ${JSON.stringify(store.getState(), undefined, 2)}`))

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unSubscribe()
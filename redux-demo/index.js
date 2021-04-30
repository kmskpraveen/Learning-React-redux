const redux = require('redux');
const createStore = redux.createStore;

const BUY_CAKE = 'BUY_CAKE';

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

const initialState = {
    numOfCakes: 10
}

/**
 * Reducer function (previousState, action) => newState)
 * @param state 
 * @param action 
 * @returns 
 */
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        default: return state
    }
}

const store = createStore(reducer);

console.log(`Initial state: ${JSON.stringify(store.getState(), undefined, 2)}`);

const unSubscribe = store.subscribe(() => console.log(`Updated state: ${JSON.stringify(store.getState(), undefined, 2)}`))

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

unSubscribe()
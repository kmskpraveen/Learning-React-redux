import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux';

function HooksCakeContainer() {
    // Accepts a selector function as its parameter
    // and returns whatever the selector function returns
    const numOfCakes = useSelector(state => state.numOfCakes);

    // Returns a reference to the dispatch function from the redux store
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of cakes - {numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer

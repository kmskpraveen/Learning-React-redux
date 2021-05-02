import React from 'react';
import { connect } from 'react-redux';
import { buyCake, buyIceCream } from '../redux';

function ItemContainer(props) {
    return (
        <div>
            <h2>Item - {props.item}</h2>
            <button onClick={props.buyItem}>Buy Items</button>
        </div>
    )
}

// The second parameter to mapStateToProps is the props that
// have already been passed to the component
const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake 
    ? state.cake.numOfCakes 
    : state.iceCream.numOfIceCreams;

    return {
        item: itemState
    }
}

// The second parameter to mapDispatchToProps is the props that
// have already been passed to the component
const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());

    return {
        buyItem: dispatchFunction
    }
}

// export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)

// If you only want to dispatch actions but not subscribe 
// but not to the state changes to the store, then pass null
// as first arguement to the connect
export default connect(null, mapDispatchToProps)(ItemContainer)

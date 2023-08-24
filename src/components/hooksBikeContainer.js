import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {BuyBike} from '../redux'

function HooksBikeContainer() {
  const numOfBikes = useSelector(state => state.numberofBikes);
  const dispatch = useDispatch()
  return (
    <div>
      <h3> Number Of Bikes: {numOfBikes} </h3>
      <button onClick = {() => dispatch(BuyBike())} > Buy Bike</button>
    </div>
  )
}

export default HooksBikeContainer;

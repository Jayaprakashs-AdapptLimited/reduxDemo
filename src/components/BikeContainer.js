import React from 'react';
import {connect} from 'react-redux';
import {BuyBike} from '../redux'

function BikeContainer(props) {
  console.log(props, 'props')
  return (
    <div>
      <h1> Number of Bikes: {props.numOfBikes} </h1>
      <button onClick={props.buybike}> Buy Bike </button>
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state, 'State')
  return {
    numOfBikes: state.numberofBikes,
  }
}

const mapDispatchToProps = dispatch => {
  
  console.log(dispatch, 'Dispatch')
  return {
    buybike: () => dispatch(BuyBike())
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (BikeContainer);

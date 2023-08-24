import {BUY_BIKE} from './bikeTypes';

const initialState = {numberofBikes: 10};

const BikeReducer = (state=initialState, action) => {
    switch(action.type) {
        case BUY_BIKE :
            return {
                ...state,
                numberofBikes: state.numberofBikes - 1
            }

            default: return state
    }
}

export default BikeReducer;
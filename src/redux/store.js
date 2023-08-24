import {createStore} from 'redux' 
import BikeReducer from './bike/bikeReducer'

const store = createStore(BikeReducer);

export default store;
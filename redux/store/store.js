import {createStore} from 'redux';
import RegisterReducer from '../reducers/RegisterReducer'

const store = createStore(RegisterReducer);
export default store;
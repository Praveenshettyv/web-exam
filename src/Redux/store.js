import {createStore} from 'redux'
import userreducerfunction from '../Redux/Reducers/reducers'
const given_data=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
export const store=createStore(userreducerfunction,given_data())
export default store;
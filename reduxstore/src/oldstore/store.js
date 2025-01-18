// reducer --> simple functions that modify the state
// store --> holds the state
// actions --> objets that we pass to reducer {type:"set_count", payload:1}

import {legacy_createStore} from 'redux';
import couterReducer from './counterReducer';
const store = legacy_createStore(couterReducer);
export default store;
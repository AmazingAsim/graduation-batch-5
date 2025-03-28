import {configureStore} from '@reduxjs/toolkit'
import countReducer from './counterReducer'
const store = configureStore({
    reducer:{
        counter:countReducer
    }
})

export default store
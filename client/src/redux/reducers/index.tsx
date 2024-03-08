
import {combineReducers} from 'redux'
import userStateReducer from './userReducer'
import productReducer from './productReducer'

const rootReducer = combineReducers({
    user: userStateReducer,
    product: productReducer
})

export default rootReducer
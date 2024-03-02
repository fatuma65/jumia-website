
import {combineReducers} from 'redux'
import userStateReducer from './userReducer'

const rootReducer = combineReducers({
    user: userStateReducer
})

export default rootReducer
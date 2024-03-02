import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './reducers'

export const stores = configureStore({
    reducer: rootReducer
}) 

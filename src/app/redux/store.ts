'use client'
import authReducer from './features/authSlice'
import { configureStore} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    authReducer
})

const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

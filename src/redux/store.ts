'use client'
import authReducer from './features/authSlice'
import userReducer from './features/userSlice'
import pacienteReducer from './features/pacienteSlice'
import medicoReducer from './features/medicoSlice'
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
    auth: authReducer,
    role: userReducer,
    pacienteId: pacienteReducer,
    medicoId: medicoReducer,
})

const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

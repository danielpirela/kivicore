'use client'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    islogged: false
}

export const authSlice = createSlice({
    name: 'login',
    initialState: initialState,
    reducers: {
        setAuth: (state,actions) => {
            state.islogged = actions.payload.islogged
        }
    }
})


export const {setAuth} = authSlice.actions

export default authSlice.reducer

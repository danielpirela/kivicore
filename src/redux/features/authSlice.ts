import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    islogged: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setAuth: (state,actions) => {
            state.islogged = actions.payload
            console.log(actions.payload)

        }
    }
})

export const {setAuth} = authSlice.actions
export default authSlice.reducer

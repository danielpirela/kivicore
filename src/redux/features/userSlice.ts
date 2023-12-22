import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    role: ''
}

export const userSlice = createSlice({
    name: 'userRole',
    initialState: initialState,
    reducers: {
        setRole: (state,actions) => {
            state.role = actions.payload
        }
    }
})

export const {setRole} = userSlice.actions
export default userSlice.reducer

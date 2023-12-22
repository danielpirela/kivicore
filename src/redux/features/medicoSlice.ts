import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    id: ''
}

export const medicoSlice = createSlice({
    name: 'medicoId',
    initialState: initialState,
    reducers: {
        setMedicoId: (state,actions) => {
            state.id = actions.payload
        }
    }
})

export const {setMedicoId} = medicoSlice.actions
export default medicoSlice.reducer

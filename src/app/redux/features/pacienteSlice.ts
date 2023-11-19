import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    id: '',
    email: ''
}

export const pacienteSlice = createSlice({
    name: 'pacienteId',
    initialState: initialState,
    reducers: {
        setPacienteId: (state,actions) => {
            state.id = actions.payload
        },
        setPacienteEmail: (state, actions) => {
            state.email = actions.payload
        }
    }
})

export const {setPacienteId, setPacienteEmail} = pacienteSlice.actions
export default pacienteSlice.reducer

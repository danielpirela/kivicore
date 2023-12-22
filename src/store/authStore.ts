import { create, StateCreator } from 'zustand'
import {persist} from 'zustand/middleware'

// ? Types for slices

interface authSlice {
    isLogged: boolean
    setAuth: (isLogged : boolean) => void
}

interface pacienteSlice {
    id: string
    email: string
    setPacienteId: (id : string) => void
    setPacienteEmail: (email : string) => void
}

interface medicoSlice {
    id: string
    setMedicoId: (id : string) => void
}

interface userSlice {
    role: string
    setRole: (role : string) => void
}


// * Slices

const createAuthSlice : StateCreator<authSlice> = (set) => ({
    isLogged : false,
    setAuth : (isLogged) => set({isLogged})
})

const createPacienteSlice : StateCreator<pacienteSlice> = (set) => ({
    id : '',
    email : '',
    setPacienteId : (id) => set({id}),
    setPacienteEmail : (email) => set({email})
})

const createMedicoSlice : StateCreator<medicoSlice> = (set) => ({
    id : '',
    setMedicoId : (id) => set({id})
})

const createUserSlice : StateCreator<userSlice> = (set) => ({
    role : '',
    setRole : (role) => set({role})
})


// * Final store

export const useAuthStore = create<authSlice & pacienteSlice & medicoSlice & userSlice>()(
    persist( (...a) => ({

        ...createAuthSlice(...a),
        ...createPacienteSlice(...a),
        ...createMedicoSlice(...a),
        ...createUserSlice(...a)
    }),
    {name: 'AuthStore'}
    )
)

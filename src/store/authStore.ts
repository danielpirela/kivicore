import { create, StateCreator } from 'zustand'
import { persist } from 'zustand/middleware'

// ? Types for slices

interface authSlice {
    isLogged: boolean
    setAuth: (isLogged: boolean) => void
}

interface pacienteSlice {
    pacienteId: string
    email: string
    setPacienteId: (pacienteId: string) => void
    setPacienteEmail: (email: string) => void
}

interface medicoSlice {
    medicoId: string
    setMedicoId: (medicoId: string) => void
}

interface userSlice {
    role: string
    setRole: (role: string) => void
}

// * Slices

const createAuthSlice: StateCreator<authSlice> = set => ({
    isLogged: false,
    setAuth: isLogged => set({ isLogged }),
})

const createPacienteSlice: StateCreator<pacienteSlice> = set => ({
    pacienteId: '',
    email: '',
    setPacienteId: pacienteId => set({ pacienteId }),
    setPacienteEmail: email => set({ email }),
})

const createMedicoSlice: StateCreator<medicoSlice> = set => ({
    medicoId: '',
    setMedicoId: medicoId => set({ medicoId }),
})

const createUserSlice: StateCreator<userSlice> = set => ({
    role: '',
    setRole: role => set({ role }),
})

// * Final store

export const useAuthStore = create<
    authSlice & pacienteSlice & medicoSlice & userSlice
>()(
    persist(
        (...a) => ({
            ...createAuthSlice(...a),
            ...createPacienteSlice(...a),
            ...createMedicoSlice(...a),
            ...createUserSlice(...a),
        }),
        { name: 'AuthStore' },
    ),
)

'use client'
import axios from 'axios'

import Link from 'next/link'
import { redirect } from 'next/navigation'
import { useState } from 'react'

import { Input, Label } from '@/components/ui'
import { useAuthStore } from '@/store/authStore'

function Login() {
    const auth = useAuthStore(state => state.isLogged)
    const setAuth = useAuthStore(state => state.setAuth)
    const setPacienteId = useAuthStore(state => state.setPacienteId)
    const [isError, setError] = useState(false)

    console.log(auth)

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const { elements } = e.currentTarget

        const username = elements.namedItem('username').value
        const password = elements.namedItem('password').value

        const res = await axios.post('/api/login', {
            username: username,
            password: password,
            role: 'paciente',
        })

        if (res.data.err || res.data.error) {
            setError(true)
            return setAuth(false)
        }

        setError(false)
        setAuth(true)
        setPacienteId(res.data.id)
    }

    if (auth) redirect('/paciente/admin')

    return (
        <div className='relative flex flex-col justify-center items-center min-h-screen overflow-hidden bg-slate-100 min-w-full'>
            <div className='w-auto p-6 m-auto bg-white rounded-md shadow-xl ring-2 ring-indigo-600 lg:max-w-xl animate-fade-left animate-delay-150'>
                <h1 className='text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy'>
                    Iniciar Sesion
                </h1>
                <form className='mt-6' onSubmit={handleSubmit}>
                    <div className='mb-2'>
                        <Label htmlFor='email'>Usuario</Label>
                        <Input
                            id='username'
                            name='username'
                            type='text'
                            autoComplete='current-password'
                            required
                            placeholder='pepito04'
                        />
                    </div>
                    <div className='mb-2'>
                        <Label htmlFor='password'>Password</Label>
                        <Input
                            id='password'
                            name='password'
                            type='password'
                            required
                        />
                        {isError && (
                            <p className='text-red-500 text-center'>
                                Clave y usuario no coinciden{' '}
                            </p>
                        )}
                    </div>
                    <div className='mt-6'>
                        <input
                            type='submit'
                            value='Log In'
                            className='w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600'
                        />
                    </div>
                </form>
                <p className='mt-8 text-xs font-light text-center text-gray-700'>
                    {' '}
                    Perdiste tu clave?{' '}
                    <Link
                        href='/clave/paciente'
                        className='font-medium text-indigo-600 hover:underline'
                    >
                        Recuperar
                    </Link>
                </p>

                <p className='mt-8 text-xs font-light text-center text-gray-700'>
                    {' '}
                    Aun no tienes una cuenta?{' '}
                    <Link
                        href='/register'
                        className='font-medium text-indigo-600 hover:underline'
                    >
                        Registrar
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Login

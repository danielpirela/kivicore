'use client'
import axios from 'axios'
import { redirect } from 'next/navigation'
import { useState } from 'react'
import { useAuthStore } from '../../store/authStore'
import Link from 'next/link'

function Login() {
    const auth = useAuthStore(state => state.isLogged)
    const setAuth = useAuthStore(state => state.setAuth)
    const setMedicoId = useAuthStore(state => state.setMedicoId)

    const [isError, setError] = useState(false)

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const { elements } = e.currentTarget

        const username = elements.namedItem('username').value
        const password = elements.namedItem('password').value

        const res = await axios.post('/api/login', {
            username: username,
            password: password,
            role: 'medico',
        })

        console.log(res)

        if (res.data.err || res.data.error) {
            setError(true)
            return setAuth(false)
        }
        console.log(res)
        setMedicoId(res.data.id)
        setAuth(true)
    }
    if (auth) redirect('/medico/admin')

    return (
        <div className='relative flex flex-col justify-center items-center min-h-screen overflow-hidden bg-slate-100 min-w-full'>
            <div className='w-auto p-6 m-auto bg-white rounded-md shadow-xl ring-2 ring-indigo-600 lg:max-w-xl animate-fade-left animate-delay-150'>
                <h1 className='text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy'>
                    Iniciar sesion
                </h1>
                <form className='mt-6' onSubmit={handleSubmit}>
                    <div className='mb-2'>
                        <label
                            htmlFor='email'
                            className='block text-sm font-semibold text-gray-800'
                        >
                            Usuario
                        </label>
                        <input
                            name='username'
                            type='text'
                            className='block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40'
                        />
                    </div>
                    <div className='mb-2'>
                        <label
                            htmlFor='password'
                            className='block text-sm font-semibold text-gray-800'
                        >
                            Password
                        </label>
                        <input
                            name='password'
                            type='password'
                            className='block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40'
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
                    Olvidaste tu clave?{' '}
                    <Link
                        href='/clave/medico'
                        className='font-medium text-indigo-600 hover:underline'
                    >
                        Cambiar
                    </Link>
                </p>
                <p className='mt-8 text-xs font-light text-center text-gray-700'>
                    {' '}
                    Aun no tienes una cuenta?{' '}
                    <Link
                        href='/registermedico'
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

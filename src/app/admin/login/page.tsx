'use client'
import axios from 'axios'
import { redirect } from 'next/navigation'
import { useAuthStore } from '@/store/authStore'
import { useState } from 'react'

function page () {
    const auth = useAuthStore(state => state.isLogged)
    const setAuth = useAuthStore(state => state.setAuth)

    const [isError, setError] = useState(false)

    const handleSubmit = async (e:any) => {
        e.preventDefault()

        const {elements} = e.currentTarget
        const username = elements.namedItem('username').value
        const password = elements.namedItem('password').value

        const res = await axios.post('/api/admin/login', {
            username: username,
            password: password,
        })

        console.log(res)

        if (res.data.err || res.data.error) {
            setError(true)
            return setAuth(false)
        }
        console.log(res)
        setAuth(true)
    }

    if (auth) redirect('/admin')

    return (
        <div className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden bg-slate-100 min-w-full" >
            <div className="w-auto p-6 m-auto bg-white rounded-md shadow-xl ring-2 ring-indigo-600 lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy">
                    Iniciar sesion
                </h1>
                <form className="mt-6" onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label
                            htmlFor="username"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Usuario
                        </label>
                        <input
                            name='username'
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            name='password'
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                        {
                            isError && (
                                <p className='text-red-500 text-center'>Clave y usuario no coinciden </p>
                            )
                        }
                    </div>
                    <div className="mt-6">
                        <input type="submit" value='Log In' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default page

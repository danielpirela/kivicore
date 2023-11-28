'use client'
import axios from 'axios'
import { useState } from 'react'
import Link from 'next/link'
import { IconClose } from '@/components/Icons'

function page ({searchParams} : any ) {
    const [isError, setError] = useState(false)
    const [isUpdated, setIsUpdated] = useState(false)

    const handleSubmit = async (e:any) => {
        e.preventDefault()
        const {elements} = e.currentTarget
        const password = elements.namedItem('password').value
        const confirmP = elements.namedItem('confirmP').value


        if (password === confirmP) {
            const res = await axios.put('/api/recuperar/actualizar', {
                username: searchParams.username,
                password: password,
                role: 'paciente'
            })

            console.log(res)
            if (res.data.err || res.data.error) {
                setIsUpdated(false)
                return setError(true)
            }
            setIsUpdated(true)
            window.location.replace('/login')
        }
    }

    return (
        <div className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden bg-slate-100 min-w-full" >

            {
                isUpdated && (
                    <div id="toast-simple" className="flex items-center w-full max-w-sm p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x  divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800 animate-fade-left delay-150 absolute right-4 bottom-4" role="alert">
                        <svg className="w-5 h-5 text-blue-600 dark:text-blue-500 rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"/>
                        </svg>
                        <div className="ps-4 text-sm font-normal">Se actualizo la clave correctamente.</div>
                        <button className='pl-2' onClick={ () => {setIsUpdated(!isUpdated)}}>
                            <IconClose w={24} h={24}/>
                        </button>
                    </div>
                )
            }
            <div className="w-auto p-6 m-auto bg-white rounded-md shadow-xl ring-2 ring-indigo-600 lg:max-w-xl animate-fade-left animate-delay-150">
                <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy">
                Actualizar clave
                </h1>
                <form className="mt-6" onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Nueva clave
                        </label>
                        <input
                            name='password'
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="confirmP"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            name='confirmP'
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                        {
                            isError && (
                                <p className='text-red-500 text-center'>Claves no coinciden</p>
                            )
                        }
                    </div>
                    <div className="mt-6">
                        <input type="submit" value='Actualizar' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"/>
                    </div>
                </form>
                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {' '}
                    Aun no tienes una cuenta?{' '}
                    <Link
                        href="/registermedico"
                        className="font-medium text-indigo-600 hover:underline"
                    >
                        Registrar
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default page

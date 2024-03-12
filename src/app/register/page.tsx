'use client'
import axios from 'axios'
import { redirect } from 'next/navigation'
import { useEffect, useState } from 'react'

function Register() {
    const [isCreated, setIsCreated] = useState(false)

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const { elements } = e.currentTarget

        const name = elements.namedItem('nombre').value
        const username = elements.namedItem('username').value
        const phone = elements.namedItem('telefono').value
        const email = elements.namedItem('email').value
        const password = elements.namedItem('password').value
        const dni = elements.namedItem('dni').value
        const gender = elements.namedItem('genero').value
        const status = elements.namedItem('estado').value

        console.log(name, phone, email, password, dni, gender, status)

        const res = await axios.post('/api/paciente', {
            username: username,
            dni: Number(dni),
            phone: Number(phone),
            email: email,
            password: password,
            name: name,
            gender: gender,
            status: status,
        })

        if (res.data.message === 'no se enviaron datos')
            return setIsCreated(false)
        setIsCreated(true)
    }

    useEffect(() => {
        if (isCreated) redirect('/login')
    }, [isCreated])

    return (
        <div className='relative flex flex-col justify-center items-center min-h-screen overflow-hidden bg-slate-100 min-w-full animate-fade-left animate-delay-150 p-4 '>
            <div className='w-auto p-6 m-auto bg-white rounded-md shadow-xl ring-2 ring-indigo-600 lg:max-w-xl '>
                <h1 className='text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy'>
                    Registrar
                </h1>
                <form className='mt-6' onSubmit={handleSubmit}>
                    <div className='mb-2'>
                        <label
                            htmlFor='username'
                            className='block text-sm font-semibold text-gray-800'
                        >
                            Username
                        </label>
                        <input
                            name='username'
                            type='text'
                            className='block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40'
                        />
                    </div>
                    <div className='mb-2'>
                        <label
                            htmlFor='nombre'
                            className='block text-sm font-semibold text-gray-800'
                        >
                            Nombre
                        </label>
                        <input
                            name='nombre'
                            type='text'
                            className='block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40'
                        />
                    </div>
                    <div className='mb-2'>
                        <label
                            htmlFor='email'
                            className='block text-sm font-semibold text-gray-800'
                        >
                            Email
                        </label>
                        <input
                            name='email'
                            type='email'
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
                    </div>
                    <div className='mb-2'>
                        <label
                            htmlFor='dni'
                            className='block text-sm font-semibold text-gray-800'
                        >
                            Dni
                        </label>
                        <input
                            name='dni'
                            type='number'
                            className='block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40'
                        />
                    </div>
                    <div className='mb-2'>
                        <label
                            htmlFor='telefono'
                            className='block text-sm font-semibold text-gray-800'
                        >
                            Telefono
                        </label>
                        <input
                            name='telefono'
                            type='text'
                            className='block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40'
                        />
                    </div>
                    <div className='mb-2 text-black'>
                        <div className='flex justify-between items-center'>
                            <label htmlFor='genero'>Hombre</label>
                            <input
                                value='Hombre'
                                name='genero'
                                type='radio'
                                className='block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300'
                            />
                        </div>
                        <div className='flex justify-between items-center'>
                            <label htmlFor='genero'>Mujer</label>
                            <input
                                value='Mujer'
                                name='genero'
                                type='radio'
                                className='block w-full px-4 py-2  text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300'
                            />
                        </div>
                    </div>

                    <div className='mb-2 text-black'>
                        <div className='flex justify-between items-center'>
                            <label htmlFor='estado'>Asegurado</label>
                            <input
                                value='Asegurado'
                                name='estado'
                                type='radio'
                                className='block w-full px-6 py-2 mt-2 text-black bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300'
                            />
                        </div>
                        <div className='flex justify-center items-center'>
                            <label htmlFor='genero' className='flex-2'>
                                No asegurado
                            </label>
                            <input
                                value='No asegurado'
                                name='estado'
                                type='radio'
                                className='block w-full py-2  text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 flex-1'
                            />
                        </div>
                    </div>
                    <div className='mt-6'>
                        <input
                            type='submit'
                            value='Registrar'
                            className='w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600'
                        />
                    </div>
                </form>

                <p className='mt-8 text-xs font-light text-center text-gray-700'>
                    {' '}
                    Ya tienes una cuenta?{' '}
                    <a
                        href='/login'
                        className='font-medium text-indigo-600 hover:underline'
                    >
                        Iniciar sesion
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Register

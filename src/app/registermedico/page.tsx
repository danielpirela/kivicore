'use client'
import { createMedico } from '@/utils/fetchData'
import { DateTimePicker } from '@mui/x-date-pickers'
import { useState } from 'react'

function RegisterMedico() {
    const [shiftStart, setShiftStart] = useState(null)
    const [shiftEnd, setShiftEnd] = useState(null)
    const [isError, setIsError] = useState(false)
    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const { elements } = e.currentTarget

        const username = elements.namedItem('username').value
        const name = elements.namedItem('nombre').value
        const dni = elements.namedItem('dni').value
        const email = elements.namedItem('email').value
        const password = elements.namedItem('password').value
        const specialty = elements.namedItem('specialty').value
        const numAppt = elements.namedItem('numAppt').value
        const numFreeAppt = elements.namedItem('numFreeAppt').value

        if (
            !username ||
            !shiftStart ||
            !shiftEnd ||
            !name ||
            !numAppt ||
            !numFreeAppt ||
            !email ||
            !password ||
            !dni ||
            !specialty
        ) {
            return setIsError(true)
        }

        const newShiftStart = await shiftStart.toISOString()
        const newShiftEnd = await shiftEnd.toISOString()

        const res = await createMedico(
            username,
            name,
            dni,
            email,
            password,
            specialty,
            newShiftStart,
            newShiftEnd,
            numAppt,
            numFreeAppt,
        )

        if (res.data.error) {
            console.log(res)
            return setIsError(true)
        }
        setIsError(false)
    }

    return (
        <div className='flex flex-col justify-center items-center min-h-screen overflow-hidden bg-slate-100 min-w-full'>
            <div className='w-auto h-full p-6 m-auto bg-white rounded-md shadow-xl ring-2 ring-indigo-600'>
                <h1 className='text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy'>
                    Registro
                </h1>
                <form
                    className='mt-6 flex flex-col min-w-full justify-center items-center'
                    onSubmit={handleSubmit}
                >
                    <div className='flex flex-now  min-w-full'>
                        <div className='p-5'>
                            <div className='mb-2'>
                                <label
                                    htmlFor='username'
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
                        </div>

                        <div className='p-5'>
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
                                    htmlFor='specialty'
                                    className='block text-sm font-semibold text-gray-800'
                                >
                                    Especialidad
                                </label>
                                <input
                                    name='specialty'
                                    type='text'
                                    className='block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40'
                                />
                            </div>
                            <div className='mb-2 text-black'>
                                <label
                                    htmlFor='shiftStart'
                                    className='block text-sm font-semibold text-gray-800'
                                >
                                    Inicio Turno
                                </label>
                                <DateTimePicker
                                    label='Seleccione una fecha'
                                    value={shiftStart}
                                    onChange={newValue =>
                                        setShiftStart(newValue)
                                    }
                                />
                            </div>
                        </div>

                        <div className='p-5'>
                            <div className='mb-2 text-black'>
                                <label
                                    htmlFor='shiftEnd'
                                    className='block text-sm font-semibold text-gray-800'
                                >
                                    Final Turno
                                </label>
                                <DateTimePicker
                                    label='Seleccione una fecha'
                                    value={shiftEnd}
                                    onChange={newValue => setShiftEnd(newValue)}
                                />
                            </div>

                            <div className='mb-2'>
                                <label
                                    htmlFor='numAppt'
                                    className='block text-sm font-semibold text-gray-800'
                                >
                                    Citas diarias
                                </label>
                                <input
                                    name='numAppt'
                                    type='number'
                                    className='block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40'
                                />
                            </div>

                            <div className='mb-2'>
                                <label
                                    htmlFor='numFreeAppt'
                                    className='block text-sm font-semibold text-gray-800'
                                >
                                    Citas cortecia
                                </label>
                                <input
                                    name='numFreeAppt'
                                    type='number'
                                    className='block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        {isError && (
                            <p className='text-red-500 text-center'>
                                Verifique los datos
                            </p>
                        )}
                        <input
                            type='submit'
                            value='Registrar'
                            className='w-xl px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600'
                        />
                    </div>
                </form>

                <p className='mt-8 text-xs font-light text-center text-gray-700'>
                    {' '}
                    Ya tienes una cuenta?{' '}
                    <a
                        href='/loginmedico'
                        className='font-medium text-indigo-600 hover:underline'
                    >
                        Iniciar sesion
                    </a>
                </p>
            </div>
        </div>
    )
}

export default RegisterMedico

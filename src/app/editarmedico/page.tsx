'use client'
import { getMedicoById } from '@/utils/fetchData'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useAuthStore } from '../../store/authStore'
import { DateTimePicker } from '@mui/x-date-pickers'

function EditarMedico() {
    const [medico, setMedico] = useState({})
    const [shiftStart, setShiftStart] = useState(null)
    const [shiftEnd, setShiftEnd] = useState(null)
    const [isError, setIsError] = useState(false)

    const idMedico = useAuthStore(state => state.medicoId)

    useEffect(() => {
        const setState = async () => {
            const res = await getMedicoById(idMedico)
            setMedico(res.data)
        }
        setState()
    }, [])

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        const { elements } = e.currentTarget

        const name = elements.namedItem('nombre').value
        const username = elements.namedItem('username').value
        const dni = elements.namedItem('dni').value
        const email = elements.namedItem('email').value
        const password = elements.namedItem('password').value
        const specialty = elements.namedItem('specialty').value
        const numAppt = elements.namedItem('numAppt').value
        const numFreeAppt = elements.namedItem('numFreeAppt').value

        if (
            !username ||
            !name ||
            !email ||
            !password ||
            !dni ||
            !specialty ||
            !numAppt ||
            !numFreeAppt ||
            !shiftStart ||
            !shiftEnd
        ) {
            setIsError(true)
        }
        console.log(
            name,
            email,
            password,
            dni,
            specialty,
            numAppt,
            numFreeAppt,
            username,
        )

        if (shiftStart && shiftEnd) {
            const newShiftStart = await shiftStart.toISOString()
            const newShiftEnd = await shiftEnd.toISOString()

            console.log(newShiftEnd, newShiftStart)

            const res = await axios.put(`/api/medico/${idMedico}`, {
                name: name,
                username: username,
                dni: Number(dni),
                email: email,
                password: password,
                specialty: specialty,
                shiftStart: newShiftStart,
                shiftEnd: newShiftEnd,
                numAppt: Number(numAppt),
                numFreeAppt: Number(numFreeAppt),
            })
            console.log(res)
        }
    }

    return (
        <div className='flex flex-col justify-center items-center min-h-screen overflow-hidden bg-slate-100 min-w-full p-6'>
            <div className='w-auto h-full p-6 m-auto bg-white rounded-md shadow-xl ring-2 ring-indigo-600'>
                <h1 className='text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy'>
                    Editar
                </h1>
                <form
                    className='mt-6 flex flex-col min-w-full justify-center items-center'
                    onSubmit={handleSubmit}
                >
                    <div className='flex flex-col md:flex-row  sm:flex-row  min-w-full'>
                        <div className='p-5'>
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
                                    className='block text-sm font-semibold text-gray-800 py-2'
                                >
                                    Inicio Turno
                                </label>
                                <DateTimePicker
                                    label='Basic date time picker'
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
                                    className='block text-sm font-semibold text-gray-800 pb-4'
                                >
                                    Final Turno
                                </label>
                                <DateTimePicker
                                    label='Basic date time picker'
                                    value={shiftStart}
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

                    <div>
                        <input
                            type='submit'
                            value='Editar'
                            className='w-xl px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600'
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditarMedico

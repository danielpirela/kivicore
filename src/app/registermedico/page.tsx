'use client'
import axios from 'axios'
import moment from 'moment'
import { redirect } from 'next/navigation'
import { useEffect, useState } from 'react'

function Register () {

    const [isCreated, setIsCreated] = useState(false)

    const handleSubmit = async (e:any) => {
        e.preventDefault()
        const {elements} = e.currentTarget

        const name = elements.namedItem('nombre').value
        const dni = elements.namedItem('dni').value
        const email = elements.namedItem('email').value
        const password = elements.namedItem('password').value
        const specialty = elements.namedItem('specialty').value
        const shiftStart = elements.namedItem('shiftStart').value
        const shiftEnd = elements.namedItem('shiftEnd').value
        const numAppt = elements.namedItem('numAppt').value
        const numFreeAppt = elements.namedItem('numFreeAppt').value

        console.log(name,email, password, dni, specialty, numAppt, numFreeAppt, shiftStart,shiftEnd)


        const newShiftStart = moment(shiftStart).toISOString()
        const newShiftEnd = moment(shiftEnd).toISOString()


        console.log(newShiftStart,newShiftEnd)

        const res = await axios.post('/api/medico', {
            name: name,
            dni: Number(dni),
            email: email,
            password: password,
            specialty: specialty,
            shiftStart: newShiftStart,
            shiftEnd: newShiftEnd,
            numAppts: Number(numAppt),
            numFreeAppt: Number(numFreeAppt)
        })

        console.log(res)

        /* if (res.data.message === 'Invalid data') return setIsCreated(false)

        setIsCreated(true) */
    }

    useEffect(() =>{
        if (isCreated) console.log('cicla')

        //redirect('/loginmedico')
    },[isCreated])

    return (
        <div className="flex flex-col justify-center items-center min-h-screen overflow-hidden bg-slate-100 min-w-full" >

            <div className="w-auto h-full p-6 m-auto bg-white rounded-md shadow-xl ring-2 ring-indigo-600">
                <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy">
                    Registro
                </h1>
                <form className="mt-6 flex flex-col min-w-full justify-center items-center" onSubmit={handleSubmit}>

                    <div className='flex flex-now  min-w-full'>
                        <div className='p-5'>
                            <div className="mb-2">
                                <label
                                    htmlFor="nombre"
                                    className="block text-sm font-semibold text-gray-800"
                                >
                            Nombre
                                </label>
                                <input
                                    name='nombre'
                                    type="text"
                                    className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            <div className="mb-2">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-semibold text-gray-800"
                                >
                            Email
                                </label>
                                <input
                                    name='email'
                                    type="email"
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
                            </div>
                        </div>

                        <div className='p-5'>
                            <div className="mb-2">
                                <label
                                    htmlFor="dni"
                                    className="block text-sm font-semibold text-gray-800"
                                >
                            Dni
                                </label>
                                <input
                                    name='dni'
                                    type="number"
                                    className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            <div className="mb-2">
                                <label
                                    htmlFor="specialty"
                                    className="block text-sm font-semibold text-gray-800"
                                >
                            Especialidad
                                </label>
                                <input
                                    name='specialty'
                                    type="text"
                                    className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            <div className="mb-2 text-black">
                                <label
                                    htmlFor="shiftStart"
                                    className="block text-sm font-semibold text-gray-800"
                                >
                            Inicio Turno
                                </label>
                                <input
                                    name='shiftStart'
                                    type="date"
                                    className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                        </div>

                        <div className='p-5'>
                            <div className="mb-2 text-black">
                                <label
                                    htmlFor="shiftEnd"
                                    className="block text-sm font-semibold text-gray-800"
                                >
                            Final Turno
                                </label>
                                <input
                                    name='shiftEnd'
                                    type="date"
                                    className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>

                            <div className="mb-2">
                                <label
                                    htmlFor="numAppt"
                                    className="block text-sm font-semibold text-gray-800"
                                >
                            Citas diarias
                                </label>
                                <input
                                    name='numAppt'
                                    type="number"
                                    className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>

                            <div className="mb-2">
                                <label
                                    htmlFor="numFreeAppt"
                                    className="block text-sm font-semibold text-gray-800"
                                >
                            Citas cortecia
                                </label>
                                <input
                                    name='numFreeAppt'
                                    type="number"
                                    className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                        </div>

                    </div>

                    <div>
                        <input type="submit" value='Registrar' className="w-xl px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"/>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {' '}
                    Ya tienes una cuenta?{' '}
                    <a
                        href="/loginmedico"
                        className="font-medium text-indigo-600 hover:underline"
                    >
                        Iniciar sesion
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Register

import axios from 'axios'
import { useState } from 'react'
import { IconClose } from './Icons'

export function Contact() {
    const [Error, setError] = useState(false)
    const [isCreated, setIsCreated] = useState(false)

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const { elements } = e.currentTarget
        const email = elements.namedItem('email').value
        const subject = elements.namedItem('subject').value
        const message = elements.namedItem('message').value

        const res = await axios.post('/api/contact', {
            email: email,
            subject: subject,
            message: message,
        })

        console.log(res)

        if (res.data.err || res.data.error) {
            setError(true)
        }

        if (res.data.message === 'ok') {
            setIsCreated(true)
        }

        console.log(res)
    }

    return (
        <div className='relative' id='contact'>
            {isCreated && (
                <div
                    id='toast-simple'
                    className='flex items-center w-full max-w-sm p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white  divide-x  divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800 animate-fade-left delay-150 absolute right-0 bottom-0'
                    role='alert'
                >
                    <svg
                        className='w-5 h-5 text-blue-600 dark:text-blue-500 rotate-45'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 18 20'
                    >
                        <path
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='m9 17 8 2L9 1 1 19l8-2Zm0 0V9'
                        />
                    </svg>
                    <div className='ps-4 text-sm font-normal'>
                        Correo enviado correctamente.
                    </div>
                    <button
                        className='pl-2'
                        onClick={() => {
                            setIsCreated(!isCreated)
                        }}
                    >
                        <IconClose w={24} h={24} />
                    </button>
                </div>
            )}
            <section className='bg-white rounded-md dark:bg-gray-950'>
                <div className='py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
                    <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 '>
                        Contactanos
                    </h2>
                    <p className='mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl'>
                        ¿Tienes un problema técnico? ¿Quieres enviar
                        comentarios? ¿Necesitas detalles sobre nuestro planes?
                        Háganoslo saber.
                    </p>
                    <form onSubmit={handleSubmit} className='space-y-8'>
                        <div>
                            <label
                                htmlFor='email'
                                className='block mb-2 text-sm font-medium text-gray-900'
                            >
                                Tu correo
                            </label>
                            <input
                                type='email'
                                id='email'
                                className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 '
                                placeholder='roberto@gmail.com'
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor='subject'
                                className='block mb-2 text-sm font-medium text-gray-900 '
                            >
                                Asunto
                            </label>
                            <input
                                type='text'
                                id='subject'
                                className='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500'
                                placeholder='Háganos saber cómo podemos ayudarle'
                                required
                            />
                        </div>
                        <div className='sm:col-span-2'>
                            <label
                                htmlFor='message'
                                className='block mb-2 text-sm font-medium text-gray-900 '
                            >
                                Tu mensaje
                            </label>
                            <textarea
                                id='message'
                                rows={6}
                                className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500'
                                placeholder='Contacto por problema una cita...'
                                required
                            ></textarea>
                        </div>
                        {Error && (
                            <div className='min-w-full justify-center items-center flex'>
                                <p className='text-red-600 text-lg'>
                                    verifique los datos
                                </p>
                            </div>
                        )}
                        <button
                            type='submit'
                            className='py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-indigo-700'
                        >
                            Enviar
                        </button>
                    </form>
                </div>
            </section>
        </div>
    )
}

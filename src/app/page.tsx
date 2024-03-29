'use client'

import { Contact } from '@/components/Contact'
import { CardMedicHome } from '@/components/CardMedicHome'
import {
    IconMedicD,
    IconMedicH,
    IconMedicP,
    IconMedicT,
} from '@/components/Icons'
import { Header } from '@/components/ui/Header'
import Link from 'next/link'

export default function Home() {
    return (
        <div className='bg-white relative flex flex-col bg:white dark:bg-gray-950'>
            <Header />
            <div className='min-w-full h-3/4 pt-20 bg-white dark:bg-gray-800 relative'>
                <picture className='w-full h-full shadow-xl'>
                    <img
                        src='/images/Rectangle.webp'
                        alt='medic image'
                        className='object-cover aspect-auto w-full h-full'
                    />
                </picture>

                <div className='absolute left-0 top-40 h-auto w-full p-6'>
                    <p className='text-indigo-700 text-2xl opacity-100 sm:text-xl '>
                        Cuidado profesional para su salud
                    </p>

                    <h1 className='text-3xl text-black font-bold  md:text-5xl z-10'>
                        Atención de calidad a la vida
                        <br />
                        para toda la familia
                    </h1>
                </div>
            </div>
            <main className='min-h-screen min-w-full flex justify-center items-start py-20 flex-col bg:white dakr:bg-gray-800 bg-white'>
                <section className='flex flex-col gap-2 p-2 items-center md:flex-row'>
                    <picture className='flex flex-1 w-full sm:w-2/3'>
                        <img
                            src='/images/hospital.webp'
                            alt='medic image'
                            className='object-cover aspect-square w-full h-full'
                        />
                    </picture>
                    <div className='flex p-4 gap-4 flex-1 flex-col' id='about'>
                        <p className='font-bold text-xl text-indigo-700'>
                            Saber mas
                        </p>
                        <h1 className='text-3xl text-black font-bold  md:text-4xl z-10'>
                            Soluciones médicas completas en un solo lugar
                        </h1>
                        <p className='text-xl opacity-75 text-zinc-700'>
                            Nuestro centro médico sirve como un hospital
                            universitario de referencia regional y brinda
                            atención de renombre para pacientes cardíacos,
                            mujeres y bebés.
                        </p>
                        <p className='text-xl opacity-75 text-indigo-700'>
                            “Nuestra misión es ser un recurso único de
                            asesoramiento.”
                        </p>
                    </div>
                </section>

                <section className='w-full h-auto flex flex-wrap gap-6 justify-center items-center mt-4'>
                    <CardMedicHome>
                        <IconMedicH w={32} h={32} />
                        <h3 className='text-black font-medium'>Tratamiento</h3>
                        <p className='text-black'>
                            Manejo y cuidado de un paciente para combatir una
                            enfermedad o trastorno.
                        </p>
                    </CardMedicHome>
                    <CardMedicHome>
                        <IconMedicD w={32} h={32} />
                        <h3 className='text-black font-medium'>Diagnostico</h3>
                        <p className='text-black'>
                            Proceso de determinación de enfermedades o síntomas
                            y signos.
                        </p>
                    </CardMedicHome>
                    <CardMedicHome>
                        <IconMedicP w={32} h={32} />
                        <h3 className='text-black font-medium'>Consulta</h3>
                        <p className='text-black'>
                            La mejor manera de entenderla es como una
                            interacción social bidireccional.
                        </p>
                    </CardMedicHome>

                    <CardMedicHome>
                        <IconMedicT w={32} h={32} />
                        <h3 className='text-black font-medium'>
                            Cuidados durante el embarazo
                        </h3>
                        <p className='text-black'>
                            La atención prenatal es la atención médica que
                            recibe una mujer durante el embarazo.
                        </p>
                    </CardMedicHome>
                </section>
            </main>
            <footer className='min-w-full flex-col justify-center items-center p-2'>
                <Contact />
                <div className='min-w-full justify-center items-center flex py-2'>
                    <Link
                        href={'admin/login'}
                        className='font-medium text-center dark:text-white text-black'
                    >
                        admin
                    </Link>
                </div>
            </footer>
        </div>
    )
}

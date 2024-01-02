'use client'

import { Contact } from '@/components/Contact'
import { CardMedicHome } from '@/components/CardMedicHome'
import { IconMedicD, IconMedicH, IconMedicP, IconMedicT } from '@/components/Icons'
import { Logo } from '@/components/Logo'
import DarkMode from '@/components/ui/DarkMode'
import { NavLink } from '@/components/ui/links/NavLink'

export default function Home() {
    return (
        <div className='min-w-full min-h-screen dark:bg-slate-100 bg-slate-900'>
            <header className='fixed z-50 dark:bg-white/80 bg-slate-900/80 min-w-full h-16 flex justify-between items-center p-2 shadow-xl backdrop-blur-lg'>
                <Logo/>
                <nav className='flex gap-2 justify-center items-center'>
                    <DarkMode/>
                    <NavLink href={'#contact'}>
                        Contactanos
                    </NavLink>
                    <NavLink href={'/login'} >
                        Paciente
                    </NavLink>
                    <NavLink href={'/loginmedico'} >
                        Medico
                    </NavLink>
                </nav>

                <nav>
                    
                </nav>
            </header>

            <div className='min-w-full h-3/4 pt-36 dark:bg-slate-100 bg-slate-900 relative '>
                <picture className='w-full h-full shadow-xl'>
                    <img src='/images/Rectangle.webp' alt='medic image' className='object-cover aspect-auto w-full h-full'/>
                </picture>

                <div className='absolute left-0 top-40 h-auto w-full p-6'>
                    <p className='text-indigo-700 text-2xl opacity-100 sm:text-xl '>Cuidado profesional para su salud</p>

                    <h1 className='text-3xl text-black font-bold  md:text-5xl z-10'>Atención de calidad a la vida
                        <br />
                    para toda la familia</h1>
                </div>
            </div>

            <main className='dark:bg-slate-100 bg-slate-900 min-h-screen min-w-full flex justify-center items-start py-20 flex-col' >
                <section className='flex flex-col gap-2 p-2 items-center md:flex-row'>
                    <picture className='flex flex-1 w-full sm:w-2/3'>
                        <img src='/images/hospital.webp' alt='medic image' className='object-cover aspect-square w-full h-full'/>
                    </picture>
                    <div className='flex p-4 gap-4 flex-1 flex-col'>
                        <p className='font-bold text-xl text-indigo-700'>Saber mas</p>
                        <h1 className='text-3xl text-black font-bold  md:text-4xl z-10'>Soluciones médicas completas en un solo lugar
                        </h1>
                        <p className='text-xl opacity-75 text-zinc-700'>
                        Nuestro centro médico sirve como un hospital universitario de referencia regional y brinda atención de renombre para pacientes cardíacos, mujeres y bebés.
                        </p>
                        <p className='text-xl opacity-75 text-indigo-700'>“Nuestra misión es ser un recurso único de asesoramiento.”</p>
                    </div>
                </section>

                <section className='w-full h-auto flex flex-wrap gap-6 justify-center items-center mt-4'>
                    <CardMedicHome>
                        <IconMedicH w={32} h={32}/>
                        <h3 className='text-black font-medium'>Tratamiento</h3>
                        <p className='text-black'>Manejo y cuidado de un paciente para combatir una enfermedad o trastorno.</p>
                    </CardMedicHome>
                    <CardMedicHome>
                        <IconMedicD w={32} h={32}/>
                        <h3 className='text-black font-medium'>Diagnostico</h3>
                        <p className='text-black'>Proceso de determinación de enfermedades o síntomas y signos.</p>
                    </CardMedicHome>
                    <CardMedicHome>
                        <IconMedicP w={32} h={32}/>
                        <h3 className='text-black font-medium'>Consulta</h3>
                        <p className='text-black'>La mejor manera de entenderla es como una interacción social bidireccional.</p>
                    </CardMedicHome>

                    <CardMedicHome>
                        <IconMedicT w={32} h={32}/>
                        <h3 className='text-black font-medium'>Cuidados durante el embarazo</h3>
                        <p className='text-black'>La atención prenatal es la atención médica que recibe una mujer durante el embarazo.</p>
                    </CardMedicHome>

                </section>
            </main>

            <footer className='min-w-full flex-col justify-center items-center p-2'>
                <Contact/>
                <div className='min-w-full justify-center items-center flex py-2'>
                    <NavLink href={'admin/login'} >Admin</NavLink>
                </div>
            </footer>
        </div>
    )
}

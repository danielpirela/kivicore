'use client'

import { LogoAnimated } from '@/components/Logo'
import Link from 'next/link'

export default function Home() {

    return (
        <main className='bg-slate-100 min-h-screen min-w-full flex justify-center items-center flex-col space-y-10' >
            <LogoAnimated/>
            <section className='flex justify-between gap-2'>
                <Link href={'/login'} className='w-full px-6 py-4 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600  text-xl'>
                Paciente
                </Link>
                <Link href={'/loginmedico'} className='w-full px-6 py-4 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 text-xl'>
                Medico
                </Link>
            </section>

        </main>
    )
}

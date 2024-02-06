'use client'
import { CardIlustration } from '@/components/ui/CardIlustration'
import { Header } from '@/components/ui/Header'
export default function page() {
    return (
        <div className='overflow-hidden'>
            <Header />
            <h1 className='w-full text-center block font-bold text-3xl my-10 text-pretty'>
                Escoge Tu Rol Para Registrase
            </h1>
            <main
                className='relative min-w-full h-auto justify-center items-center md:items-start flex gap-2 md:flex-row flex-col p-8
            '
            >
                <CardIlustration
                    href={'/register'}
                    role={'paciente'}
                    peeps={'afro smile eyepatch goatee2 pointing-up'}
                />
                <CardIlustration
                    href={'/registermedico'}
                    role={'medico'}
                    peeps={'bald1 old glasses1 beard1 shirt-coat'}
                />
            </main>
        </div>
    )
}

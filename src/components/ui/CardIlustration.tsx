import Link from 'next/link'
import './illustration.css'

interface Ilustrations {
    href: string
    role: string
    peeps: string
}
export function CardIlustration({ href, role, peeps }: Ilustrations) {
    return (
        <div className='relative w-auto hover:scale-125 transition-all ease-in duration-500'>
            <Link
                className={`relative ring-2 ring-black shadow-lg  ${role}`}
                href={href}
                data-css-peeps={peeps}
                rel='noreferrer'
            ></Link>
            <h1 className='absolute top-2 left-2 font-bold text-xl first-letter:uppercase'>
                {role}
            </h1>
        </div>
    )
}

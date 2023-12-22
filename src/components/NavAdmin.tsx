import Link from 'next/link'
import { BackArrow } from './BackArrow'
import { useAuthStore } from '@/store/authStore'


export const NavAdmin = () => {
    const setAuth = useAuthStore(state => state.setAuth)

    const handleClick = () =>{
        setAuth(false)
    }

    return (
        <nav className='flex bg-white shadow-lg min-w-full min-h-40 justify-between items-center
        border-b-2 border-indigo-600'>
            <div className='flex justify-start items-center'>
                <BackArrow/>
            </div>
            <div className='flex justify-end items-center m-2 hover:animate-jump hover:bg-indigo-600 '>
                <Link onClick={handleClick} href={'/'} className='text-black px-4 py-2 ring-2 ring-indigo-600 rounded-md'>
                    Cerrar sesion
                </Link>
            </div>
        </nav>
    )
}

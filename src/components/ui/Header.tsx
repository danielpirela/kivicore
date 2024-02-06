import Link from 'next/link'
import Logo from '../Logo'
import { DarkMode } from './DarkMode'
import { useState } from 'react'

export function Header() {
    const [isHidden, setIsHidden] = useState(false)
    const HiddenHandler = () => setIsHidden(!isHidden)

    return (
        <nav className='bg-white border-gray-200 dark:bg-gray-900 flex min-w-full justify-between shadow-lg'>
            <div className='flex flex-wrap items-center justify-between mx-0 p-4 flex-2 w-full'>
                <Link href={'/'} className='flex-1 w-auto'>
                    <Logo />
                </Link>
                <button
                    data-collapse-toggle='navbar-default'
                    type='button'
                    className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
                    aria-controls='navbar-default'
                    aria-expanded='false'
                    onClick={HiddenHandler}
                >
                    <span className='sr-only'>Open main menu</span>
                    <svg
                        className='w-5 h-5'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 17 14'
                    >
                        <path
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M1 1h15M1 7h15M1 13h15'
                        />
                    </svg>
                </button>
                <DarkMode />
                <div
                    className={`w-full md:flex md:w-auto ${isHidden ? 'hidden' : ''}`}
                    id='navbar-default'
                >
                    <ul className='font-medium flex flex-col justify-center items-center p-4 py-8 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 '>
                        <li>
                            <Link
                                href='/'
                                className='block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 hover:scale-110 transition-all duration-200'
                                aria-current='page'
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href='/#about'
                                className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:scale-110 transition-all duration-200'
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href='/#contact'
                                className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:scale-110 transition-all duration-200 '
                            >
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link
                                href='/prelogin'
                                className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:scale-110 transition-all duration-200'
                            >
                                Login
                            </Link>
                        </li>
                        <li className='px-3 py-2 flex items-center justify-center rounded-md hover:scale-110 transition-all duration-200 md:bg-blue-700 md:text-white bg-transparent dark:text-white text-gray-900'>
                            <Link
                                href='/preregister'
                                className='block rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                            >
                                Sign up
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

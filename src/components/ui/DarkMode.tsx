'use client'
import { useEffect, useState } from 'react'

export default function DarkMode() {

    const $ = (query : string) => window.document.querySelector(query)
    const button = $('#theme-button')
    const html = window.document.getElementsByTagName('html')[0]
    const [theme, setTheme] = useState('light')

    useEffect(()=> {
            if (theme === 'dark') {
                html?.classList.add('dark')
                // $('theme-button')?.classList.add('active')
            } else {
                html?.classList.remove('dark')
                // $('theme-button')?.classList.remove('active')
            }
    },[theme])

    const handleChange = () => {
        button?.classList.toggle('active')
        setTheme(prevTheme =>  prevTheme === 'light' ? 'dark' : 'light')
    }

    return (
        <div className='flex justify-center items-center my-0 px-2'>
            <div className='bg-blue-700 relative w-14 h-7
            shadow-inner cursor-pointer rounded-full'
            onClick={handleChange}
            >
                <div
                    id='theme-button'
                    className='bg-white absolute left-0 top-0 size-7 transform-[scale(.7)] shadow-lg transition-all duration-200 rounded-full
                    '
                >
                </div>
            </div>
        </div>
    )
}




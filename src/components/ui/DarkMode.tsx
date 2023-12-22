'use client'
import { useEffect, useState } from 'react'

export default function DarkMode() {
    const $ = (query : string) => document.querySelector(query)

    const button = $('#theme-button')
    const html = document.getElementsByTagName('html')[0]
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
        <div className='dark:bg-slate-900 bg-slate-100  min-w-full min-h-screen flex justify-center items-center my-0 mx-auto'>
            <div className='dark:bg-slate-100 bg-slate-900 relative w-14 h-7
            shadow-inner cursor-pointer rounded-full'
            onClick={handleChange}
            >
                <div
                    id='theme-button'
                    className='dark:bg-slate-900 bg-slate-100 absolute left-0 top-0 w-7 h-7 transform-[scale(.7)] shadow-lg transition-all duration-200 rounded-full
                    '
                >
                </div>
            </div>
        </div>
    )
}




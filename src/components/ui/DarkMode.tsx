'use client'
import { useEffect, useState } from 'react'

export function DarkMode() {
    const [theme, setTheme] = useState('light')
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        const html = document.getElementsByTagName('html')[0]
        if (theme === 'dark') {
            html?.classList.add('dark')
            //$('theme-button')?.classList.add('active')
        } else {
            html?.classList.remove('dark')
            //$('theme-button')?.classList.remove('active')
        }
        console.log(isActive)
    }, [theme, isActive])

    const handleChange = () => {
        //button?.classList.toggle('active')
        setIsActive(!isActive)
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
    }

    return (
        <div className='flex justify-center items-center my-0 mx-4'>
            <div
                className='bg-slate-900 dark:bg-slate-50 relative w-14 h-7
                shadow-inner cursor-pointer rounded-full flex items-center'
                onClick={handleChange}
            >
                <div
                    id='theme-button'
                    className={`dark:bg-slate-900 bg-slate-50 absolute w-6 h-6 transform-[scale(.7)] shadow-lg transition-all duration-200 rounded-full
                    ${isActive ? 'left-[29px]' : 'left-[2px]'}
                    `}
                ></div>
            </div>
        </div>
    )
}

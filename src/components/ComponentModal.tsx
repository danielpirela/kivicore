import { useState } from 'react'
import { IconCheck, IconClose } from './Icons'

export const ComponentModal = ({children}) => {
    const [isOpen,setIsOpen ] = useState(false)

    return (
        <>
            {
                !isOpen &&(
                    <button className='rounded-full py-2 px-4 bg-indigo-600 text-white absolute bottom-0 right-0 animate-bounce animate-infinite' onClick={()=>{
                        setIsOpen(!isOpen)
                    }}
                    >
                        +
                    </button>
                )
            }

            {
                isOpen && (

                    <div className='fixed top-0 left-0 min-h-full min-w-full flex justify-center items-center bg-none z-50 overflow-hidden'>
                        <button className='absolute top-0 right-0 mr-4 mt-20 p-1 bg-indigo-600 rounded-lg'
                            onClick={()=>{
                                setIsOpen(false)
                            }}
                        >
                            <IconClose w={24} h={24}/>
                        </button>
                        <div>
                            {children}
                        </div>
                    </div>
                )
            }
        </>
    )
}

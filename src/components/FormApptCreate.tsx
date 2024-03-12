'use client'
import { useState } from 'react'

const FormApptCreate = () => {
    const [isActive, setIsActive] = useState(false)
    const handleClick = (e: any) => {
        e.preventDefault()
        setIsActive(!isActive)
    }

    return (
        <div>
            <button onClick={handleClick}>Crear Cita</button>
        </div>
    )
}

export default FormApptCreate

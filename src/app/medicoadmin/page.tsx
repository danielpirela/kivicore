'use client'
import { getCitas } from '@/utils/fetchData'
import { useEffect, useState } from 'react'

const page = () => {
    const [citas,setCitas] = useState([])

    useEffect(() =>{
        const res =  async() =>{
            const res = await getCitas()
            if(res) {
                setCitas(res.data.citas)}
        }
        res()
    },[])

    console.log(citas)

    return (
        <div className='bg-slate-100 min-h-screen min-w-full'>{
            citas.map((cita) => {
                const {id,paciente, type} = cita
                if (cita.legth === 0){
                    return (
                        <h1 key={1}>No se encontraron citas</h1>
                    )
                }
                return (
                    <ul key={id}>
                        <li>
                            {paciente.name}
                        </li>
                        <li>
                            {type}
                        </li>
                    </ul>
                )
            })
        }</div>
    )
}

export default page

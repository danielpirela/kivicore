import { NextResponse } from 'next/server'
import {prisma} from '@/utils/prisma'
export async function GET () {
    return NextResponse.json({message: 'hola'})
}

interface Params {
    params: {id : number}
}

export async function POST(req: Request, {params} : Params){
    try {
        const {content} = await req.json()

        console.log(content)

        const createdHistory = await prisma.history.create({
            data:{
                content,
                pacienteId: params.id
            }
        })

        console.log(createdHistory)

        if(!createdHistory) return NextResponse.json({message: 'no se pudo crear el historial medico', status: 404})
        console.log(createdHistory)

    } catch (err) {
        if(err instanceof Error)  {
            return NextResponse.json({message: err.message, status: 500})
        }
    }
}

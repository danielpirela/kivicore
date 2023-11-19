import { hashPassword } from '@/utils/hashPassword'
import {prisma} from '@/utils/prisma'
import { NextResponse } from 'next/server'

interface Params {
    params: {id: string}
}

export async function GET(req: Request, {params}: Params) {
    try{
        const paciente = await prisma.paciente.findFirst({
            where: {id: Number(params.id)},
            include: {
                history: true,
                appointment: true
            }
        })

        if(!paciente) return NextResponse.json({message: 'no se encontro paciente'})
        return NextResponse.json(paciente)

    }catch(err){
        if(err instanceof Error){
            return NextResponse.json({
                message: err.message,
                status: 500
            })
        }
    }
}

export async function PUT(req: Request, {params} : Params){
    try {
        const {dni,phone,email,password,name,gender,status,history} = await req.json()
        const newPassword = await hashPassword(password)

        if(!dni && !phone && !email && !password && !name && !gender && !status && !history){
            return NextResponse.json({message: 'no se enviaron datos'})
        }

        const pacientePut = await prisma.paciente.update({
            where: {
                id: Number(params.id)
            },
            data:{
                dni,
                phone,
                email,
                password: newPassword,
                name,
                gender,
                status,
                history
            }
        })

        if (!pacientePut) return NextResponse.json({message: 'No se puedo actualizar el paciente'})

        return NextResponse.json(pacientePut)

    } catch (err) {
        if(err instanceof Error) {
            return NextResponse.json(
                {
                    message: 'Ocurrio un error', status: 500
                }
            )
        }
    }
}

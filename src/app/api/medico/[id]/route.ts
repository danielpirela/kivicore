import { prisma } from '@/utils/prisma'
import { NextResponse } from 'next/server'

interface Params {
    params: {id:string}
}
export async function GET(req: Request, {params} :Params){

    try {
        if (!params.id) return NextResponse.json({error: 'Invalid params', status: 404})

        const medico = await prisma.medico.findFirst({
            where: {
                id: Number(params.id)
            },
            include: {
                appointment: true
            }
        })

        if (!medico) return NextResponse.json({error: 'No se encontro ningun usuario', status: 404})

        return NextResponse.json(medico)

    } catch (err) {
        if(err instanceof Error) return NextResponse.json({error: err.message, status: 500})
    }
}

export async function PUT(req: Request, {params} : Params){
    try {
        const {
            name,
            dni,
            email,
            password,
            specialty,
            shiftStart,
            shiftEnd,
            numAppt,
            numFreeAppt
        } = await req.json()


        if(!name || !specialty || !shiftStart || !shiftEnd  || !numAppt || !numFreeAppt || !dni || !email || !password){
            return NextResponse.json({message: 'no se enviaron datos'})
        }

        const medicoPut = await prisma.medico.update({
            where: {
                id: Number(params.id)
            },
            data:{
                name,
                dni,
                email,
                password,
                specialty,
                shiftStart,
                shiftEnd,
                numAppt,
                numFreeAppt
            }
        })

        if (!medicoPut) return NextResponse.json({message: 'No se pudo actualizar el medico'})

        return NextResponse.json(medicoPut)

    } catch (err) {
        if(err instanceof Error) {
            return NextResponse.json(
                {
                    error: 'Ocurrio un error', status: 500
                }
            )
        }
    }
}

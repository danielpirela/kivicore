import { hashPassword } from '@/utils/hashPassword'
import { prisma } from '@/utils/prisma'
import { NextResponse } from 'next/server'

export async function POST (req: Request) {
    try {
        const {name,
            dni,
            email,
            password,
            specialty,
            shiftStart,
            shiftEnd,
            numAppt,
            numFreeAppt
        } = await req.json()

        console.log(name,dni,email,password,specialty,shiftStart,shiftEnd,numAppt,numFreeAppt)

        if(!name || !specialty || !shiftStart || !shiftEnd  || !numAppt || !numFreeAppt || !dni || !email || !password){
            return NextResponse.json({error: 'no se enviaron datos'})
        }

        const newPassword = await hashPassword(password)

        const medico = await prisma.medico.create({
            data: {
                name,
                dni,
                email,
                password:newPassword,
                specialty,
                shiftStart,
                shiftEnd,
                numAppt,
                numFreeAppt
            }
        })

        if (!medico) return NextResponse.json({error: 'Invalid data', status: 404})

        return NextResponse.json(medico)
    }
    catch (err) {
        if (err instanceof Error) {
            return NextResponse.json({error: err.message, status: 500})
        }
    }
}

export async function GET(){

    try {
        const medico = await prisma.medico.findMany({
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

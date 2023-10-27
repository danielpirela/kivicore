import bcrypt from 'bcrypt'
import { prisma } from '@/utils/prisma'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
    try {
        const {email, password} = await req.json()

        if (!email || !password) {
            return NextResponse.json({error: 'correo o no contrasena enviado'}
            )}

        const paciente = await prisma.paciente.findFirst({where: {email: email}})
        const medico = await prisma.medico.findFirst({where: {email: email}})


        if (paciente) {
            const passwordHash = paciente.password
            const comparedPassword = await bcrypt.compare(password, passwordHash)

            if (!comparedPassword) {
                return NextResponse.json({mesage: 'usuario y clave no es valido'})
            }

            return NextResponse.json({message: 'ok'})
        }

        if (medico) {
            const passwordHash = medico.password
            const comparedPassword = await bcrypt.compare(password, passwordHash)

            if (!comparedPassword) {
                return NextResponse.json({mesage: 'usuario y clave no es valido'})
            }

            return NextResponse.json({message: 'ok'})
        }

        return NextResponse.json({error: 'no se existe el correo'})
    }catch(err){
        if(err instanceof Error){
            return NextResponse.json({mesage: err.message, status: 500})
        }
    }

}

import bcrypt from 'bcrypt'
import { prisma } from '@/utils/prisma'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
    try {
        const {username, password, role} = await req.json()

        if (!username || !password || role === '' || !role) {
            return NextResponse.json({error: 'correo o no contrasena enviado'}
            )}
        const paciente = await prisma.paciente.findFirst({where: {username: username}})
        const medico = await prisma.medico.findFirst({where: {username: username}})

        if (paciente && role === 'paciente') {
            const passwordHash = paciente.password
            const comparedPassword = await bcrypt.compare(password, passwordHash)

            if (!comparedPassword) {
                return NextResponse.json({error: 'usuario y clave no es valido'})
            }

            return NextResponse.json({message: 'ok', id: paciente.id})
        }

        if (medico && role === 'medico') {
            const passwordHash = medico.password
            const comparedPassword = await bcrypt.compare(password, passwordHash)

            if (!comparedPassword) {
                return NextResponse.json({error: 'usuario y clave no es valido'})
            }

            return NextResponse.json({message: 'ok',id:medico.id})
        }

        return NextResponse.json({error: 'no se existe el correo'})

    }catch(err){
        if(err instanceof Error){
            return NextResponse.json({error: err.message, status: 500})
        }
    }

}

import bcrypt from 'bcrypt'
import { prisma } from '@/utils/prisma'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
    try {
        const {username, password} = await req.json()

        console.log(username, password)

        if (!username|| !password) {
            return NextResponse.json({error: 'user y  contrasena no enviado'}
            )}
        const admin = await prisma.adminUser.findFirst({where: {username: username}})

        if (admin) {
            const passwordHash = admin.password
            const comparedPassword = await bcrypt.compare(password, passwordHash)

            if (!comparedPassword) {
                return NextResponse.json({error: 'usuario y clave no es valido'})
            }

            return NextResponse.json({message: 'ok'})
        }

        return NextResponse.json({error: 'no se existe el user'})

    }catch(err){
        if(err instanceof Error){
            return NextResponse.json({error: err.message, status: 500})
        }
    }

}

import { prisma } from '@/utils/prisma'
import { NextResponse } from 'next/server'
import { hashPassword } from '@/utils/hashPassword'

export async function POST(req: Request){
    try {
        const {username,password} = await req.json()

        if (!username || !password) {
            return NextResponse.json({error: 'usuario y contrasena enviado'}
            )}

        const newPassword = await hashPassword(password)

        await prisma.adminUser.create({
            data:
                {
                    username: username,
                    password: newPassword
                }
        })

        return NextResponse.json({message: 'ok', status: 200})

    }catch(err){
        if(err instanceof Error){
            return NextResponse.json({error: err.message, status: 500})
        }
    }

}


export async function GET () {
    try {
        const admin = await prisma.adminUser.findMany()
        if(!admin) return NextResponse.json({error: 'admin not found'})
        return NextResponse.json(admin)

    }catch(err){
        if(err instanceof Error){
            return NextResponse.json({error: err.message, status: 500})
        }
    }

}

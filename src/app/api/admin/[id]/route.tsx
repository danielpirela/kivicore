import { prisma } from '@/utils/prisma'
import { NextResponse } from 'next/server'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import { hashPassword } from '@/utils/hashPassword'

export async function GET (req: Request, {params} : Params) {

    try {
        if (!params.id) return NextResponse.json({error: 'Invalid params', status: 404})

        const admin = await prisma.adminUser.findFirst({
            where: {
                id: Number(params.id)
            }
        })

        if (!admin) return NextResponse.json({error: 'No se encontro ningun usuario', status: 404})

        return NextResponse.json(admin)

    } catch (err) {
        if(err instanceof Error) return NextResponse.json({error: err.message, status: 500})
    }

}


export async function PUT(req: Request, {params} : Params){
    try {
        const {username,password} = await req.json()

        if (!params.id) return NextResponse.json({error: 'Invalid params', status: 404})

        if(!username || !password){
            return NextResponse.json({message: 'no se enviaron datos'})
        }

        const newPassword = await hashPassword(password)
        const adminPut = await prisma.adminUser.update({
            where: {
                id: Number(params.id)
            },
            data:{
                username :username,
                password:newPassword
            }
        })

        if (!adminPut) return NextResponse.json({message: 'No se pudo actualizar el admin'})

        return NextResponse.json(adminPut)

    } catch (err) {
        if(err instanceof Error) {
            return NextResponse.json(
                {
                    error: err.message, status: 500
                }
            )
        }
    }
}




export async function DELETE (req: Request, {params} : Params) {
    try {
        if (!params.id) return NextResponse.json({error: 'Invalid params', status: 404})
        await prisma.adminUser.delete({
            where :{
                id : Number(params.id)
            }
        })
        return NextResponse.json({message: 'deleted'})
    } catch (err) {
        if(err instanceof Error) {
            return NextResponse.json(
                {
                    error: err.message, status: 500
                }
            )
        }
    }
}

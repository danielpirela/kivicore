import { prisma } from '@/utils/prisma'
import { NextResponse } from 'next/server'

interface Params {
    params: { id: number }
}

export async function PUT(req: Request, { params }: Params) {
    try {
        const { content } = await req.json()

        if (!content) return NextResponse.json({ message: 'Invalid' })

        const createdHistory = await prisma.history.update({
            where: { id: Number(params.id) },
            data: {
                content,
            },
        })

        console.log(createdHistory)

        if (!createdHistory)
            return NextResponse.json({
                message: 'no se pudo crear el historial medico',
                status: 404,
            })

        return NextResponse.json(createdHistory)
        console.log(createdHistory)
    } catch (err) {
        if (err instanceof Error) {
            return NextResponse.json({ message: err.message, status: 500 })
        }
    }
}

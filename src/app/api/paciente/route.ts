import { NextResponse } from 'next/server'
import { prisma } from '@/utils/prisma'
import { hashPassword } from '@/utils/hashPassword'

export async function GET() {
    try {
        const pacientes = await prisma.paciente.findMany({
            include: {
                history: true,
                appointment: true,
            },
        })

        if (pacientes.length === 0 || !pacientes)
            return NextResponse.json({ message: 'no se encontraron pacientes' })
        return NextResponse.json(pacientes)
    } catch (err) {
        if (err instanceof Error) {
            return NextResponse.json(err, { status: 500 })
        }
    }
}

export async function POST(req: Request) {
    try {
        const { username, dni, phone, email, password, name, gender, status } =
            await req.json()

        if (
            !username ||
            !dni ||
            !phone ||
            !email ||
            !password ||
            !name ||
            !gender ||
            !status
        ) {
            return NextResponse.json({ message: 'no se enviaron datos' })
        }

        const newPassword = await hashPassword(password)
        const pacienteCreado = await prisma.paciente.create({
            data: {
                username,
                dni,
                phone,
                email,
                password: newPassword,
                name,
                gender,
                status,
            },
        })

        const voidHistory = await prisma.history.create({
            data: {
                content: '',
                paciente: {
                    connect: {
                        id: pacienteCreado.id,
                    },
                },
            },
        })

        return NextResponse.json({ pacienteCreado, voidHistory })
    } catch (err) {
        if (err instanceof Error) {
            return NextResponse.json(err.message, { status: 500 })
        }
    }
}

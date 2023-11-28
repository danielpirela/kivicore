import { hashPassword } from '@/utils/hashPassword'
import { prisma } from '@/utils/prisma'
import { NextResponse } from 'next/server'


export async function PUT (req: Request){

    try {
        const {username,password,role} = await req.json()

        if (!username || !password || role === '' || !role) {
            return NextResponse.json({error: 'correo o no contrasena enviado'}
            )}

        const paciente = await prisma.paciente.findFirst({where: {username: username}})
        const medico = await prisma.medico.findFirst({where: {username: username}})

        if (paciente && role === 'paciente') {

            const newPassword = await hashPassword(password)

            const res = await prisma.paciente.update({
                where: {username: username},
                data:{
                    username : paciente.username,
                    dni : paciente.dni,
                    phone: paciente.phone,
                    email: paciente.email,
                    password: newPassword,
                    name: paciente.name,
                    gender: paciente.gender,
                    status: paciente.status,
                }
            })

            console.log(res)

            return NextResponse.json({message: 'ok'})
        }

        if (medico && role === 'medico') {

            const newPassword = await hashPassword(password)
            const res = await prisma.medico.update({
                where: {username: username},
                data:{
                    name : medico.name,
                    username : medico.username,
                    dni : medico.dni,
                    email: medico.email,
                    password : newPassword,
                    specialty: medico.specialty,
                    shiftStart: medico.shiftStart,
                    shiftEnd: medico.shiftEnd,
                    numAppt: medico.numAppt,
                    numFreeAppt: medico.numFreeAppt
                }
            })

            console.log(res)
            return NextResponse.json({message: 'ok'})
        }
        return NextResponse.json({error: 'no se existe el correo'})
    }
    catch(err){
        if(err instanceof Error){
            return NextResponse.json({error: err.message, status: 500})
        }
    }
}

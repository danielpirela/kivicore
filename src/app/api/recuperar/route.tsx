import { transporter } from '@/utils/email'
import { prisma } from '@/utils/prisma'
import { NextResponse } from 'next/server'
const { EMAIL } = process.env

export async function POST(req: Request) {
    try {
        const { username, role } = await req.json()

        if (!username || role === '' || !role) {
            return NextResponse.json({ error: 'usuario no enviado' })
        }

        const paciente = await prisma.paciente.findFirst({
            where: { username: username },
        })

        const medico = await prisma.medico.findFirst({
            where: { username: username },
        })

        if (paciente && role === 'paciente') {
            const info = await transporter.sendMail({
                from: EMAIL,
                to: paciente.email,
                subject: 'Codigo',
                text: 'Aqui tienes tu codigo para tu cita',
                html: `
                <html lang="es">
                <head>
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>Resetear Clave</title>
                  <style>
                    body {
                      font-family: Arial, sans-serif;
                      background-color: #f0f0f0;
                      color: #333;
                      margin: 0;
                      padding: 0;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      height: 100vh;
                    }

                    #reset-form {
                      background-color: #fff;
                      border-radius: 8px;
                      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                      padding: 20px;
                      text-align: center;
                    }

                    h2 {
                      color: #3f51b5;
                    }

                    input {
                      width: 100%;
                      padding: 10px;
                      margin: 10px 0;
                      box-sizing: border-box;
                    }

                    a {
                      background-color: #3f51b5;
                      color: #fff;
                      padding: 10px 20px;
                      border: none;
                      border-radius: 4px;
                      cursor: pointer;
                      font-size: 16px;
                    }

                    button:hover {
                      background-color: #2c3e50;
                    }
                  </style>
                </head>
                <body>
                  <div id="reset-form">
                    <h2>Resetear Clave</h2>
                    <form>
                      <a href='http://localhost:3000/actualizar/medico?username=${username}'">Restablecer Clave</a>
                    </form>
                  </div>
                </body>
                </html>
                `,
            })

            console.log(info)

            return NextResponse.json({ message: 'ok' })
        }

        if (medico && role === 'medico') {
            const info = await transporter.sendMail({
                from: EMAIL,
                to: medico.email,
                subject: 'Codigo',
                text: 'Aqui tienes tu codigo para tu cita',
                html: `
                <html lang="es">
                <head>
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>Resetear Clave</title>
                  <style>
                    body {
                      font-family: Arial, sans-serif;
                      background-color: #f0f0f0;
                      color: #fff;
                      margin: 0;
                      padding: 0;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      height: 100vh;
                    }

                    #reset-form {
                      background-color: #fff;
                      border-radius: 8px;
                      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                      padding: 20px;
                      text-align: center;
                    }

                    h2 {
                      color: #3f51b5;
                    }

                    input {
                      width: 100%;
                      padding: 10px;
                      margin: 10px 0;
                      box-sizing: border-box;
                    }

                    a {
                      background-color: #3f51b5;
                      color: #fff;
                      padding: 10px 20px;
                      border: none;
                      border-radius: 4px;
                      cursor: pointer;
                      font-size: 16px;
                    }

                    button:hover {
                      background-color: #2c3e50;
                    }
                  </style>
                </head>
                <body>
                  <div id="reset-form">
                    <h2>Resetear Clave</h2>
                    <form>
                      <a href='http://localhost:3000/actualizar/medico?username=${username}'>Restablecer Clave</a>
                    </form>
                  </div>
                </body>
                </html>
                `,
            })

            console.log(info)

            return NextResponse.json({ message: 'ok' })
        }

        return NextResponse.json({ error: 'no se existe el correo' })
    } catch (err) {
        if (err instanceof Error) {
            return NextResponse.json({ error: err.message, status: 500 })
        }
    }
}

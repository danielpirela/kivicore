import { transporter } from '@/utils/email'
import { NextResponse } from 'next/server'

const { EMAIL } = process.env

export async function POST(req: Request) {
    try {
        const { email, subject, message } = await req.json()

        if (!email || !subject || !message)
            return NextResponse.json({
                error: 'verifique los datos',
                status: 404,
            })

        const info = await transporter.sendMail({
            from: EMAIL,
            to: EMAIL,
            subject: subject,
            text: '',
            html: `
                    <div>
                        <p>usuario: ${email}</p>
                        <p>mensaje: ${message}</p>
                    </div>
                    `,
        })
        console.log(info)

        return NextResponse.json({ message: 'ok' })
    } catch (err) {
        if (err instanceof Error) {
            return NextResponse.json({ message: err.message, status: 500 })
        }
    }
}

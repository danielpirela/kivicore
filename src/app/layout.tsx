'use client'
import { Inter } from 'next/font/google'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang='en'>
            <head>
                <title>Kevi core</title>
            </head>
            <body className={inter.className}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    {children}
                </LocalizationProvider>
            </body>
        </html>
    )
}

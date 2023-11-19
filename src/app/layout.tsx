'use client'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ProviderGate, Providers } from './redux/provider'
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
        <html lang="en">
            <head>
                <title>Kevi core</title>
            </head>
            <body className={inter.className}>
                <Providers>
                    <ProviderGate>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            {children}
                        </LocalizationProvider>
                    </ProviderGate>
                </Providers>
            </body>
        </html>
    )
}

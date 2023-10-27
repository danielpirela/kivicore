import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ProviderGate, Providers } from './redux/provider'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Kivi Core',
    description: 'App Kivi Core',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Providers>
                    <ProviderGate>
                        {children}
                    </ProviderGate>
                </Providers>
            </body>
        </html>
    )
}

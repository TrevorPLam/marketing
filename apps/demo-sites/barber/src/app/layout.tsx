import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Barber Website',
  description: 'Professional barber services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

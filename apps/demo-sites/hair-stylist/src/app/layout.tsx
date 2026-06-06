import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hair Stylist Website',
  description: 'Professional hair stylist services',
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

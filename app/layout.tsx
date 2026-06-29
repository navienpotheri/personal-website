import './globals.css'
import type { Metadata } from 'next'
import Nav from './components/Nav'

export const metadata: Metadata = {
  title: 'Navien Potheri',
  description: 'Personal website of Navien Potheri — AI, cognition, embodied systems, and personal computing.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased bg-[#fafafa] text-[#111111]">
        <main className="mx-auto max-w-3xl px-6 py-8 md:py-12">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  )
}
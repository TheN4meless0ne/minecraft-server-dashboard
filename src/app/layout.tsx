import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Minecraft Server Dashboard',
  description: 'A dynamic Minecraft server dashboard with support for BungeeCord networks and file transfers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <div className="min-h-screen bg-minecraft-dark">
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
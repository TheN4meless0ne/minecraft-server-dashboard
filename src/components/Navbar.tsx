'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Server, Users, HardDrive, Network, Settings } from 'lucide-react'
import { clsx } from 'clsx'

const navigation = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'Servers', href: '/servers', icon: Server },
  { name: 'Players', href: '/players', icon: Users },
  { name: 'Files', href: '/files', icon: HardDrive },
  { name: 'Network', href: '/network', icon: Network },
  { name: 'Settings', href: '/settings', icon: Settings },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="bg-minecraft-light border-b border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-minecraft-green rounded"></div>
              <span className="text-xl font-bold text-white">
                MC Dashboard
              </span>
            </Link>
            
            <div className="hidden md:flex space-x-4">
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={clsx(
                      'flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors',
                      pathname === item.href
                        ? 'bg-minecraft-accent text-white'
                        : 'text-gray-300 hover:text-white hover:bg-gray-700'
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 text-sm">
              <div className="w-2 h-2 bg-minecraft-green rounded-full"></div>
              <span className="text-gray-300">All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
import { Server, Users, HardDrive, Network } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          Minecraft Server Dashboard
        </h1>
        <p className="text-gray-300 text-lg">
          Manage your Minecraft servers, BungeeCord networks, and file transfers
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link href="/servers" className="card hover:bg-minecraft-dark transition-colors">
          <div className="flex items-center space-x-3">
            <Server className="w-8 h-8 text-minecraft-accent" />
            <div>
              <h3 className="text-lg font-semibold">Server Status</h3>
              <p className="text-gray-400 text-sm">Monitor server health</p>
            </div>
          </div>
        </Link>

        <Link href="/players" className="card hover:bg-minecraft-dark transition-colors">
          <div className="flex items-center space-x-3">
            <Users className="w-8 h-8 text-minecraft-accent" />
            <div>
              <h3 className="text-lg font-semibold">Players</h3>
              <p className="text-gray-400 text-sm">View online players</p>
            </div>
          </div>
        </Link>

        <Link href="/files" className="card hover:bg-minecraft-dark transition-colors">
          <div className="flex items-center space-x-3">
            <HardDrive className="w-8 h-8 text-minecraft-accent" />
            <div>
              <h3 className="text-lg font-semibold">File Manager</h3>
              <p className="text-gray-400 text-sm">Transfer and manage files</p>
            </div>
          </div>
        </Link>

        <Link href="/network" className="card hover:bg-minecraft-dark transition-colors">
          <div className="flex items-center space-x-3">
            <Network className="w-8 h-8 text-minecraft-accent" />
            <div>
              <h3 className="text-lg font-semibold">BungeeCord</h3>
              <p className="text-gray-400 text-sm">Network management</p>
            </div>
          </div>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="text-xl font-semibold mb-4">Quick Stats</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-300">Total Servers:</span>
              <span className="status-online font-semibold">3 online</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Active Players:</span>
              <span className="text-white font-semibold">24</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Network Status:</span>
              <span className="status-online font-semibold">Healthy</span>
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-3 text-sm">
            <div className="text-gray-300">
              <span className="status-online">●</span> Player joined: Steve_Miner
            </div>
            <div className="text-gray-300">
              <span className="text-blue-400">●</span> Server restart: Survival
            </div>
            <div className="text-gray-300">
              <span className="status-online">●</span> Backup completed: Creative
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
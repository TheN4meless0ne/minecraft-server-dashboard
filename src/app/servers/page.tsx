import { Server, Activity, Users, HardDrive } from 'lucide-react'

const servers = [
  {
    name: 'Survival',
    status: 'online',
    players: '12/50',
    version: '1.20.4',
    uptime: '5d 12h',
    memory: '4.2/8 GB'
  },
  {
    name: 'Creative',
    status: 'online',
    players: '8/30',
    version: '1.20.4',
    uptime: '3d 8h',
    memory: '2.1/4 GB'
  },
  {
    name: 'Minigames',
    status: 'offline',
    players: '0/40',
    version: '1.20.4',
    uptime: '0h',
    memory: '0/6 GB'
  },
]

export default function ServersPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Server Management</h1>
        <button className="btn-primary">
          Add Server
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {servers.map((server, index) => (
          <div key={index} className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">{server.name}</h3>
              <span className={`px-2 py-1 rounded text-sm font-medium ${
                server.status === 'online' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-red-600 text-white'
              }`}>
                {server.status}
              </span>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-300">Players:</span>
                </div>
                <span className="text-white">{server.players}</span>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <Server className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-300">Version:</span>
                </div>
                <span className="text-white">{server.version}</span>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <Activity className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-300">Uptime:</span>
                </div>
                <span className="text-white">{server.uptime}</span>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <HardDrive className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-300">Memory:</span>
                </div>
                <span className="text-white">{server.memory}</span>
              </div>
            </div>
            
            <div className="mt-4 flex space-x-2">
              <button className="btn-secondary text-xs">
                Restart
              </button>
              <button className="btn-secondary text-xs">
                Console
              </button>
              <button className="btn-secondary text-xs">
                Settings
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
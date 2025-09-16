import { Network, Server, Users, Activity } from 'lucide-react'

const networkServers = [
  {
    name: 'Hub',
    type: 'Lobby',
    players: '15/100',
    status: 'online',
    memory: '1.2/4 GB',
    tps: '20.0'
  },
  {
    name: 'Survival',
    type: 'Game Server',
    players: '12/50',
    status: 'online',
    memory: '4.2/8 GB',
    tps: '19.8'
  },
  {
    name: 'Creative',
    type: 'Game Server',
    players: '8/30',
    status: 'online',
    memory: '2.1/4 GB',
    tps: '20.0'
  },
  {
    name: 'Minigames',
    type: 'Game Server',
    players: '0/40',
    status: 'offline',
    memory: '0/6 GB',
    tps: '0.0'
  },
]

export default function NetworkPage() {
  const totalPlayers = networkServers.reduce((sum, server) => {
    const current = parseInt(server.players.split('/')[0])
    return sum + current
  }, 0)

  const maxPlayers = networkServers.reduce((sum, server) => {
    const max = parseInt(server.players.split('/')[1])
    return sum + max
  }, 0)

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">BungeeCord Network</h1>
        <button className="btn-primary">
          Add Server
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="card">
          <div className="flex items-center space-x-3">
            <Network className="w-8 h-8 text-minecraft-accent" />
            <div>
              <h3 className="text-lg font-semibold">Network Status</h3>
              <p className="text-lg font-bold status-online">Healthy</p>
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className="flex items-center space-x-3">
            <Users className="w-8 h-8 text-green-500" />
            <div>
              <h3 className="text-lg font-semibold">Total Players</h3>
              <p className="text-lg font-bold text-white">{totalPlayers}/{maxPlayers}</p>
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className="flex items-center space-x-3">
            <Server className="w-8 h-8 text-blue-500" />
            <div>
              <h3 className="text-lg font-semibold">Active Servers</h3>
              <p className="text-lg font-bold text-white">
                {networkServers.filter(s => s.status === 'online').length}/{networkServers.length}
              </p>
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className="flex items-center space-x-3">
            <Activity className="w-8 h-8 text-yellow-500" />
            <div>
              <h3 className="text-lg font-semibold">Avg. TPS</h3>
              <p className="text-lg font-bold text-white">19.9</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="text-xl font-semibold mb-6">Network Servers</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="pb-3 text-gray-300 font-medium">Server</th>
                <th className="pb-3 text-gray-300 font-medium">Type</th>
                <th className="pb-3 text-gray-300 font-medium">Status</th>
                <th className="pb-3 text-gray-300 font-medium">Players</th>
                <th className="pb-3 text-gray-300 font-medium">Memory</th>
                <th className="pb-3 text-gray-300 font-medium">TPS</th>
                <th className="pb-3 text-gray-300 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {networkServers.map((server, index) => (
                <tr key={index} className="border-b border-gray-800 hover:bg-gray-800">
                  <td className="py-4">
                    <div className="flex items-center space-x-3">
                      <Server className="w-5 h-5 text-minecraft-accent" />
                      <span className="font-medium">{server.name}</span>
                    </div>
                  </td>
                  <td className="py-4 text-gray-300">{server.type}</td>
                  <td className="py-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      server.status === 'online' 
                        ? 'bg-green-600 text-white' 
                        : 'bg-red-600 text-white'
                    }`}>
                      {server.status}
                    </span>
                  </td>
                  <td className="py-4 text-gray-300">{server.players}</td>
                  <td className="py-4 text-gray-300">{server.memory}</td>
                  <td className="py-4">
                    <span className={`font-medium ${
                      parseFloat(server.tps) >= 19.5 
                        ? 'status-online' 
                        : parseFloat(server.tps) >= 18 
                        ? 'text-yellow-500' 
                        : 'text-red-500'
                    }`}>
                      {server.tps}
                    </span>
                  </td>
                  <td className="py-4">
                    <div className="flex space-x-2">
                      <button className="btn-secondary text-xs">Console</button>
                      <button className="btn-secondary text-xs">Restart</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="text-xl font-semibold mb-4">Network Configuration</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-300">Proxy Host:</span>
              <span className="text-white font-mono">mc.yourserver.com</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Proxy Port:</span>
              <span className="text-white font-mono">25565</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Online Mode:</span>
              <span className="status-online font-semibold">Enabled</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Force Default:</span>
              <span className="text-white">Hub</span>
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="text-xl font-semibold mb-4">Recent Network Events</h2>
          <div className="space-y-3 text-sm">
            <div className="text-gray-300">
              <span className="status-online">●</span> Player Steve_Miner moved from Hub to Survival
            </div>
            <div className="text-gray-300">
              <span className="text-blue-400">●</span> Server Creative restarted successfully
            </div>
            <div className="text-gray-300">
              <span className="text-red-400">●</span> Server Minigames went offline
            </div>
            <div className="text-gray-300">
              <span className="status-online">●</span> Player Alex_Builder joined the network
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
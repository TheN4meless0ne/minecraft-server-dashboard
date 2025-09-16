import { Users, Clock, MapPin } from 'lucide-react'

const players = [
  {
    name: 'Steve_Miner',
    server: 'Survival',
    online: true,
    lastSeen: 'Online',
    playtime: '45h 30m',
    location: 'Overworld',
  },
  {
    name: 'Alex_Builder',
    server: 'Creative',
    online: true,
    lastSeen: 'Online',
    playtime: '32h 15m',
    location: 'Creative World',
  },
  {
    name: 'Notch_Legend',
    server: 'Survival',
    online: false,
    lastSeen: '2 hours ago',
    playtime: '123h 45m',
    location: 'The End',
  },
  {
    name: 'Herobrine_Real',
    server: 'Minigames',
    online: false,
    lastSeen: '1 day ago',
    playtime: '89h 20m',
    location: 'Hub',
  },
]

export default function PlayersPage() {
  const onlinePlayers = players.filter(p => p.online).length
  const totalPlayers = players.length

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Player Management</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <div className="flex items-center space-x-3">
            <Users className="w-8 h-8 text-minecraft-accent" />
            <div>
              <h3 className="text-lg font-semibold">Online Players</h3>
              <p className="text-2xl font-bold status-online">{onlinePlayers}</p>
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className="flex items-center space-x-3">
            <Users className="w-8 h-8 text-gray-400" />
            <div>
              <h3 className="text-lg font-semibold">Total Players</h3>
              <p className="text-2xl font-bold text-white">{totalPlayers}</p>
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className="flex items-center space-x-3">
            <Clock className="w-8 h-8 text-yellow-500" />
            <div>
              <h3 className="text-lg font-semibold">Peak Today</h3>
              <p className="text-2xl font-bold text-white">28</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="text-xl font-semibold mb-6">Player List</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="pb-3 text-gray-300 font-medium">Player</th>
                <th className="pb-3 text-gray-300 font-medium">Server</th>
                <th className="pb-3 text-gray-300 font-medium">Status</th>
                <th className="pb-3 text-gray-300 font-medium">Playtime</th>
                <th className="pb-3 text-gray-300 font-medium">Location</th>
                <th className="pb-3 text-gray-300 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {players.map((player, index) => (
                <tr key={index} className="border-b border-gray-800 hover:bg-gray-800">
                  <td className="py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-minecraft-accent rounded"></div>
                      <span className="font-medium">{player.name}</span>
                    </div>
                  </td>
                  <td className="py-4 text-gray-300">{player.server}</td>
                  <td className="py-4">
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${player.online ? 'bg-minecraft-green' : 'bg-red-500'}`}></div>
                      <span className={player.online ? 'status-online' : 'text-gray-400'}>
                        {player.lastSeen}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 text-gray-300">{player.playtime}</td>
                  <td className="py-4">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-300">{player.location}</span>
                    </div>
                  </td>
                  <td className="py-4">
                    <div className="flex space-x-2">
                      <button className="btn-secondary text-xs">Message</button>
                      <button className="btn-secondary text-xs">Teleport</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
import { FolderOpen, File, Upload, Download, Trash2 } from 'lucide-react'

const files = [
  {
    name: 'world',
    type: 'folder',
    size: '2.3 GB',
    modified: '2 hours ago',
  },
  {
    name: 'plugins',
    type: 'folder',
    size: '145 MB',
    modified: '1 day ago',
  },
  {
    name: 'server.properties',
    type: 'file',
    size: '2.1 KB',
    modified: '3 hours ago',
  },
  {
    name: 'server.jar',
    type: 'file',
    size: '47.2 MB',
    modified: '1 week ago',
  },
  {
    name: 'logs',
    type: 'folder',
    size: '89.5 MB',
    modified: '1 hour ago',
  },
  {
    name: 'backup_2024-01-15.zip',
    type: 'file',
    size: '1.8 GB',
    modified: '2 days ago',
  },
]

export default function FilesPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">File Manager</h1>
        <div className="flex space-x-2">
          <button className="btn-secondary">
            <Upload className="w-4 h-4 mr-2" />
            Upload
          </button>
          <button className="btn-primary">
            New Folder
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="card">
          <div className="text-center">
            <Upload className="w-8 h-8 text-minecraft-accent mx-auto mb-2" />
            <h3 className="font-semibold">Upload Files</h3>
            <p className="text-gray-400 text-sm">Drag & drop or click</p>
          </div>
        </div>
        
        <div className="card">
          <div className="text-center">
            <Download className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <h3 className="font-semibold">Download</h3>
            <p className="text-gray-400 text-sm">Bulk download files</p>
          </div>
        </div>
        
        <div className="card">
          <div className="text-center">
            <FolderOpen className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
            <h3 className="font-semibold">Total Size</h3>
            <p className="text-white text-lg font-bold">4.8 GB</p>
          </div>
        </div>
        
        <div className="card">
          <div className="text-center">
            <File className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <h3 className="font-semibold">Files</h3>
            <p className="text-white text-lg font-bold">{files.length}</p>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Files & Folders</h2>
          <div className="flex items-center space-x-4">
            <span className="text-gray-400 text-sm">Path: /server/</span>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="pb-3 text-gray-300 font-medium">Name</th>
                <th className="pb-3 text-gray-300 font-medium">Size</th>
                <th className="pb-3 text-gray-300 font-medium">Modified</th>
                <th className="pb-3 text-gray-300 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {files.map((file, index) => (
                <tr key={index} className="border-b border-gray-800 hover:bg-gray-800">
                  <td className="py-4">
                    <div className="flex items-center space-x-3">
                      {file.type === 'folder' ? (
                        <FolderOpen className="w-5 h-5 text-yellow-500" />
                      ) : (
                        <File className="w-5 h-5 text-blue-500" />
                      )}
                      <span className="font-medium">{file.name}</span>
                    </div>
                  </td>
                  <td className="py-4 text-gray-300">{file.size}</td>
                  <td className="py-4 text-gray-300">{file.modified}</td>
                  <td className="py-4">
                    <div className="flex space-x-2">
                      <button className="btn-secondary text-xs">
                        <Download className="w-3 h-3" />
                      </button>
                      <button className="btn-secondary text-xs">
                        Edit
                      </button>
                      <button className="text-red-500 hover:text-red-400 p-1">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card">
        <h2 className="text-xl font-semibold mb-4">File Transfer Status</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-white font-medium">world_backup.zip</span>
              <span className="text-gray-400 ml-2">(1.2 GB)</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-32 bg-gray-700 rounded-full h-2">
                <div className="bg-minecraft-accent h-2 rounded-full" style={{width: '75%'}}></div>
              </div>
              <span className="text-sm text-gray-300">75%</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <span className="text-white font-medium">plugins.zip</span>
              <span className="text-gray-400 ml-2">(145 MB)</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-32 bg-gray-700 rounded-full h-2">
                <div className="bg-minecraft-green h-2 rounded-full" style={{width: '100%'}}></div>
              </div>
              <span className="text-sm status-online">Complete</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
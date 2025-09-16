# Minecraft Server Dashboard

A dynamic Minecraft server dashboard with support for BungeeCord networks and file transfers, built with Next.js and TypeScript.

## Features

- **Server Management**: Monitor server status, players, memory usage, and TPS
- **Player Management**: View online players, playtime statistics, and locations  
- **File Manager**: Upload, download, and manage server files with progress tracking
- **BungeeCord Network**: Manage multiple servers in a network configuration
- **Real-time Monitoring**: Live updates for server health and player activity
- **Modern UI**: Clean, responsive interface with Minecraft-themed styling

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: SWC (Speedy Web Compiler)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/TheN4meless0ne/minecraft-server-dashboard.git
   cd minecraft-server-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Dashboard home page
│   ├── servers/           # Server management
│   ├── players/           # Player management  
│   ├── files/             # File management
│   ├── network/           # BungeeCord network
│   └── settings/          # Application settings
├── components/            # Reusable React components
│   └── Navbar.tsx        # Navigation component
└── lib/                  # Utility functions and helpers
```

## Configuration

The application includes configuration for:

- **Tailwind CSS** with custom Minecraft-themed colors
- **TypeScript** with strict type checking
- **ESLint** with Next.js recommended rules
- **PostCSS** with autoprefixer

## Development

This project uses modern development practices:

- TypeScript for type safety
- ESLint for code quality
- Tailwind CSS for styling
- Next.js App Router for file-based routing
- Component-based architecture

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the MIT License.

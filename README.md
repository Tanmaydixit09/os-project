# Secure Chat App

A modern chat application built with React, TypeScript, and Supabase for authentication.

## Features

- 🔐 **User Authentication** - Secure login using Supabase
- 💬 **Chat Interface** - Real-time messaging experience
- 🎨 **Modern UI** - Built with Tailwind CSS
- 📱 **Responsive Design** - Works on all devices

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Authentication**: Supabase
- **Icons**: Lucide React
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```
bash
# Clone the repository
git clone https://github.com/Tanmaydixit09/os-project.git

# Navigate to the project directory
cd os-project

# Install dependencies
npm install
```

### Development

```
bash
# Start the development server
npm run dev
```

### Build

```
bash
# Build for production
npm run build
```

### Preview Production Build

```
bash
npm run preview
```

## Project Structure

```
src/
├── components/        # React components
│   ├── auth/         # Authentication components
│   ├── chat/         # Chat-related components
│   └── layout/      # Layout components
├── lib/              # Library configurations
│   └── supabase.ts  # Supabase client
├── store/            # State management
│   ├── authStore.ts  # Authentication state
│   └── chatStore.ts  # Chat state
├── types.ts          # TypeScript types
├── App.tsx           # Main application component
└── main.tsx         # Application entry point
```

## Environment Variables

Create a `.env` file in the root directory and add your Supabase credentials:

```
env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## License

MIT License

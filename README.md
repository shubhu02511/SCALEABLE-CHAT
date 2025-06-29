# SCALEABLE-CHAT

A modern, real-time chat application built with **Socket.IO**, **Next.js**, and **Redis** for scalable messaging across multiple clients.

## 🚀 Features

- **Real-time Messaging**: Instant message delivery using Socket.IO
- **Modern UI**: Beautiful, responsive chat interface with gradient backgrounds
- **Multi-client Support**: Chat across multiple browsers and devices simultaneously
- **Scalable Architecture**: Redis pub/sub for message broadcasting
- **Cross-platform**: Works on desktop and mobile browsers
- **Environment Configuration**: Secure credential management

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Socket.IO Client** - Real-time communication
- **CSS Modules** - Scoped styling

### Backend
- **Node.js** - Server runtime
- **Socket.IO** - Real-time bidirectional communication
- **Redis** - Message pub/sub and caching
- **TypeScript** - Type-safe server development

### Infrastructure
- **Aiven Redis** - Cloud-hosted Redis service
- **GitHub** - Version control and deployment

## 📋 Prerequisites

Before running this application, make sure you have:

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **Redis** instance (local or cloud-hosted)
- **Git** for version control

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/shubhu02511/SCALEABLE-CHAT.git
cd SCALEABLE-CHAT
```

### 2. Install Dependencies

```bash
# Install root dependencies
npm install

# Install server dependencies
cd apps/server
npm install

# Install web app dependencies
cd ../web
npm install
```

### 3. Environment Configuration

Create a `.env` file in the `apps/server` directory:

```env
REDIS_HOST=your-redis-host.com
REDIS_PORT=17128
REDIS_USERNAME=default
REDIS_PASSWORD=your-redis-password
```

### 4. Start the Application

#### Start the Socket.IO Server

```bash
cd apps/server
npm start
# or
npx ts-node index.ts
```

The server will start on `http://localhost:8000`

#### Start the Next.js Web App

```bash
cd apps/web
npm run dev
```

The web app will start on `http://localhost:3000`

## 🎯 Usage

### Basic Chat

1. **Open the application** in your browser: `http://localhost:3000`
2. **Type a message** in the input field
3. **Press Enter** or click "Send" to send the message
4. **Open multiple browser windows** to test real-time messaging

### Network Access

To access the chat from other devices on your network:

1. **Find your local IP address** (e.g., `192.168.1.45`)
2. **Update the socket connection** in `context/socket-provider.tsx`:
   ```typescript
   const _socket = io("http://YOUR_IP:8000");
   ```
3. **Access the app** from other devices using: `http://YOUR_IP:3000`

## 🏗️ Project Structure

```
scaleable-chat/
├── apps/
│   ├── web/                 # Next.js frontend application
│   │   ├── app/            # App Router pages
│   │   ├── context/        # React context providers
│   │   └── public/         # Static assets
│   ├── server/             # Socket.IO server
│   │   ├── src/
│   │   │   └── services/   # Socket service implementation
│   │   └── index.ts        # Server entry point
│   └── docs/               # Documentation app
├── packages/               # Shared packages
│   ├── ui/                # Reusable UI components
│   ├── eslint-config/     # ESLint configuration
│   └── typescript-config/ # TypeScript configuration
└── README.md
```

## 🔧 Configuration

### Socket.IO Server

The server is configured with:
- **CORS**: Allows all origins for development
- **Redis Pub/Sub**: For message broadcasting
- **Port**: 8000 (configurable via environment)

### Next.js App

The web app includes:
- **App Router**: Modern Next.js routing
- **TypeScript**: Full type safety
- **CSS Modules**: Scoped styling
- **Socket.IO Client**: Real-time communication

## 🌐 Deployment

### Local Development

1. Start Redis server (local or cloud)
2. Configure environment variables
3. Start both server and web app
4. Access via `localhost:3000`

### Production Deployment

1. **Build the Next.js app**:
   ```bash
   cd apps/web
   npm run build
   npm start
   ```

2. **Deploy the Socket.IO server**:
   ```bash
   cd apps/server
   npm run build
   npm start
   ```

3. **Configure environment variables** for production
4. **Set up Redis** (recommended: cloud service)
5. **Configure CORS** for production domains

## 🔒 Security

- **Environment Variables**: Sensitive data stored in `.env` files
- **CORS Configuration**: Properly configured for development and production
- **Input Validation**: Server-side message validation
- **Redis Security**: Secure Redis connection with authentication

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Troubleshooting

### Common Issues

1. **Connection Refused**: Make sure both server and web app are running
2. **Messages Not Appearing**: Check Redis connection and server logs
3. **CORS Errors**: Verify CORS configuration in server
4. **Environment Variables**: Ensure `.env` file is properly configured

### Debug Mode

Enable debug logging by setting environment variables:
```env
DEBUG=socket.io:*
NODE_ENV=development
```

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/shubhu02511/SCALEABLE-CHAT/issues) page
2. Create a new issue with detailed information
3. Include error messages and steps to reproduce

---

**Built with ❤️ using Socket.IO, Next.js, and Redis**

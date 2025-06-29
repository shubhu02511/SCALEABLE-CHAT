"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = require("socket.io");
const http_1 = __importDefault(require("http"));
const kafka_1 = require("./services/kafka");
class SocketService {
    io;
    constructor() {
        this.io = new socket_io_1.Server();
    }
    initListeners() {
        this.io.on("connection", (socket) => {
            console.log("New client connected:", socket.id);
            // Add your event listeners here
        });
    }
}
async function init() {
    (0, kafka_1.startMessageConsumer)();
    const socketService = new SocketService();
    const httpServer = http_1.default.createServer();
    const PORT = process.env.PORT ? process.env.PORT : 8000;
    socketService.io.attach(httpServer);
    httpServer.listen(PORT, () => console.log(`HTTP Server started at PORT:${PORT}`));
    socketService.initListeners();
}
init();
exports.default = SocketService;

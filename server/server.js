const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

// ✅ Add this block to respond to GET /
app.get("/", (req, res) => {
  res.send("Socket.IO server is running ✅");
});

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // your frontend URL
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("event:message", (data) => {
    console.log("✅ Server received:", data);
    socket.emit("message", JSON.stringify(data));
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

server.listen(8000, () => {
  console.log("Socket.IO server running on http://localhost:8000");
});

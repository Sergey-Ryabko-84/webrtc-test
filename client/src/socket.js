import io from "socket.io-client"
// const sockets = io('http://localhost:3001', { autoConnect: true, forceNew: true });
// const sockets = io("/")
const sockets = io("https://webrtc-test-10j5.onrender.com")

export default sockets

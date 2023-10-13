import io from "socket.io-client"
// const sockets = io('http://localhost:3001', { autoConnect: true, forceNew: true });
// const sockets = io('/');
const sockets = io(process.env.REACT_APP_BECKEND_URL)
export default sockets

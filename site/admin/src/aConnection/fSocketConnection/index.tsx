import { createContext, useMemo, useContext, useEffect } from "react";
import io, { Socket } from "socket.io-client";


const SocketContext = createContext<Socket | null>(null);
const useSocket = () => useContext(SocketContext)

const SocketProvider = ({ children }: any) => {
  const socket = useMemo(() => {
    return io(import.meta.env.VITE_ENVIRONMENT === "Production" ? "BASE_URL" : "http://localhost:8080", { withCredentials: true })
  }, []);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Socket connected")
    })
  }, [])

  return (
    <SocketContext.Provider value={socket} >
      {children}
    </SocketContext.Provider>
  )
}

export { SocketProvider, useSocket }

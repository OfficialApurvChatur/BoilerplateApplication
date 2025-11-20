import { createContext, useMemo, useContext, useEffect } from "react";
import io, { Socket } from "socket.io-client";
import brandConnection from "../eBrandConnection";


const SocketContext = createContext<Socket | null>(null);
const useSocket = () => useContext(SocketContext)

const SocketProvider = ({ children }: any) => {
  const socket = useMemo(() => {
    return io(brandConnection.oBackendBaseURL)
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

import { useEffect } from 'react'


const useSocketEventHook = (socket: any, handlers: any) => {
	useEffect(() => {
		Object.entries(handlers).forEach(([event, handler]) => {
      // console.log(handler, event)
      socket.on(event, handler)
    })

		return () => {
      Object.entries(handlers).forEach(([event, handler]) => {
        socket.off(event, handler)
      })
    }

	}, [socket, handlers])
}

export { useSocketEventHook }

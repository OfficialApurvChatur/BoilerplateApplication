import { useState } from "react";

import { Button } from "@/aConnection/bShadcnConnection/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/aConnection/bShadcnConnection/components/ui/dropdown-menu"

import { BellIcon } from "lucide-react"

import { useSocketEventHook } from "@/bLove/iHook/aSocketEventHook";
import { useSocket } from "@/aConnection/fSocketConnection";


export function NotificationComponent() {
  // Variable
  const [realTimeNotificationList, setRealTimeNotificationList] = useState<any[]>([])
	const socket = useSocket();

  // Listening Socket Events
  useSocketEventHook(socket, {
    ACTIVITY_LOG_LISTED: (data: any) => {
      setRealTimeNotificationList((prevList) => [...prevList, data]);
    }
  })
  
  // JSX
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild >
        <Button variant="outline" size="icon" className="relative" >
          <BellIcon className="h-[1.2rem] w-[1.2rem]" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[0.65rem] font-bold w-4 h-4 flex items-center justify-center rounded-full">
            {realTimeNotificationList.length}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80" align="end">
        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {
          realTimeNotificationList.length > 0 ? (
            realTimeNotificationList.map((each: any, index: number) => (
              <DropdownMenuItem key={index} asChild className="items-start" >
                <div className="flex flex-1 flex-col" >
                  <h1>{each?.title}</h1>
                </div>
              </DropdownMenuItem>
            ))
          ) : (
            <DropdownMenuItem asChild >
              <div className="flex flex-1 flex-col" >
                <h1>No items here...</h1>
              </div>
            </DropdownMenuItem>
          )
        }
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

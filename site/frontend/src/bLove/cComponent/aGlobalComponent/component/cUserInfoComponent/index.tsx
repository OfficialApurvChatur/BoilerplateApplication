import React from "react"
import moment from "moment";

import { Avatar, AvatarFallback, AvatarImage } from "@/aConnection/bShadcnConnection/components/ui/avatar";

import getInitialsUtility from "@/bLove/dUtility/aGetInitialsUtility";


const UserInfoComponent = (props: { user: any, time: any }) => {
  // JSX
  return (
    <React.Fragment>
      {/* UserInfoComponent */}
      <div className="flex items-center space-x-2">
        <Avatar>
          <AvatarImage src={props?.user?.eImage} />
          <AvatarFallback>{getInitialsUtility(
            props?.user?.eFirstname, 
            props?.user?.eLastname
          )}</AvatarFallback>
        </Avatar>
        <div className='hidden sm:block' >
          <div className="flex items-center flex-1 gap-1">
            <p className="text-sm leading-none">{`
              ${props?.user?.eFirstname} 
              ${props?.user?.eLastname}
            `}</p>
          </div>
          {props?.time && <p className="text-xs text-muted-foreground">{
            moment(props?.time).format('MMM Do YYYY, h:mm:ss a')
          }</p>}
        </div>
      </div>
    </React.Fragment>
  )
}

export default UserInfoComponent;

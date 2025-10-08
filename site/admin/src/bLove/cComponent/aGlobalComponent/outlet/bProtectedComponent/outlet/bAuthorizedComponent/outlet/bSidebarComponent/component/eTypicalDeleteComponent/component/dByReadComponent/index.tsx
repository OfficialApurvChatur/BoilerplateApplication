import React from "react"

import { Avatar, AvatarFallback, AvatarImage } from "@/aConnection/bShadcnConnection/components/ui/avatar";

import getInitialsUtility from "@/bLove/dUtility/aGetInitialsUtility";


const ByReadComponent = (props: any) => {
  // Destructure Props
  const { eachField } = props;

  // JSX
  return (
    <React.Fragment>
      {/* ByReadComponent */}

      <div className="grid text-sm gap-1" >
        <span className="font-medium" >{eachField.label} :</span>
        {eachField.value ? (
          <div className="flex items-center space-x-2">
            <Avatar>
              <AvatarImage src={eachField.value?.eImage} />
              <AvatarFallback>{getInitialsUtility(
                eachField.value?.eFirstname, 
                eachField.value?.eLastname
              )}</AvatarFallback>
            </Avatar>
            <div className='hidden sm:block' >
              <div className="flex items-center flex-1 gap-1">
                <p className="text-sm leading-none">{`
                  ${eachField.value?.eFirstname} 
                  ${eachField.value?.eLastname}
                `}</p>
              </div>
              <p className="text-xs text-muted-foreground">{eachField.value?.eEmail}</p>
            </div>
          </div>
        ) : "-"}
      </div>

    </React.Fragment>
  )
}

export default ByReadComponent;

import React from "react"

import { Badge } from "@/aConnection/bShadcnConnection/components/ui/badge";


const BadgeReadComponent = (props: any) => {
  // Destructure Props
  const { eachField } = props;

  // JSX
  return (
    <React.Fragment>
      {/* BadgeReadComponent */}

      <div className="grid text-sm gap-0.5" >
        <span className="font-medium" >{eachField.label} :</span>
        <span>{eachField.value && <Badge>{eachField.value}</Badge>}</span>
      </div>

    </React.Fragment>
  )
}

export default BadgeReadComponent;

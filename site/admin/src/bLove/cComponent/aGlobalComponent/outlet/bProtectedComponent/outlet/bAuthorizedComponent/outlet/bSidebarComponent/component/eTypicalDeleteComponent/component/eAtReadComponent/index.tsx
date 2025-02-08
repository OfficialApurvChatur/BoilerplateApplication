import moment from "moment";
import React from "react"


const AtReadComponent = (props: any) => {
  // Destructure Props
  const { eachField } = props;

  // JSX
  return (
    <React.Fragment>
      {/* AtReadComponent */}

      <div className="grid text-sm gap-0.5" >
        <span className="font-medium" >{eachField.label} :</span>
        <span>{eachField.value ? moment(eachField.value).format('MMM Do YYYY, h:mm:ss a') : "-"}</span>
      </div>

    </React.Fragment>
  )
}

export default AtReadComponent;

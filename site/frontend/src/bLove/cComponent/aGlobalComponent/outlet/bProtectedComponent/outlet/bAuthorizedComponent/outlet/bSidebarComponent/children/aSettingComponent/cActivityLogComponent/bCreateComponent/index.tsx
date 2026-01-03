import React from "react"

import TypicalCreateComponent from "../../../../component/bTypicalCreateComponent";


type ActivityLogCreateComponentType = {
  formHeader: any,
  formData: any,
  formValueSchema: any,
  formValueDefault: any,
  apiHandler: any,
  apiCall: any
}

const ActivityLogCreateComponent = (props: ActivityLogCreateComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* ActivityLogCreateComponent */}
      <TypicalCreateComponent 
        formHeader={props.formHeader} 
        formData={props.formData} 
        formValueSchema={props.formValueSchema} 
        formValueDefault={props.formValueDefault}
        apiHandler={props.apiHandler}
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default ActivityLogCreateComponent;

import React from "react"

import TypicalCreateComponent from "../../../../component/bTypicalCreateComponent";


type APILogCreateComponentType = {
  formHeader: any,
  formData: any,
  formValueSchema: any,
  formValueDefault: any,
  apiHandler: any,
  apiCall: any
}

const APILogCreateComponent = (props: APILogCreateComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* APILogCreateComponent */}
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

export default APILogCreateComponent;

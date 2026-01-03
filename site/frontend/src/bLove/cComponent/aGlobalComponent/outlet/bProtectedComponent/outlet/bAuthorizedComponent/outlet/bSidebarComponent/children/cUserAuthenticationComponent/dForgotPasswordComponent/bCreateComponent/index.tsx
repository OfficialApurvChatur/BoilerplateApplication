import React from "react"

import TypicalCreateComponent from "../../../../component/bTypicalCreateComponent";


type ForgotPasswordCreateComponentType = {
  formHeader: any,
  formData: any,
  formValueSchema: any,
  formValueDefault: any,
  apiHandler: any,
  apiCall: any
}

const ForgotPasswordCreateComponent = (props: ForgotPasswordCreateComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* ForgotPasswordCreateComponent */}
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

export default ForgotPasswordCreateComponent;

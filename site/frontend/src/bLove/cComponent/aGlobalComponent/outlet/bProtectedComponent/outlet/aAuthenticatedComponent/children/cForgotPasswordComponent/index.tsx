import React from "react"

import TypicalAuthFormComponent from "../../component/aTypicalAuthFormComponent"


type ForgotPasswordComponentType = {
  formHeader: any,
  formInput: any,
  formValueSchema: any,
  formValueDefault: any,
  apiHandler: any
  apiCall: any, // For Loading Only
}

const ForgotPasswordComponent = (props: ForgotPasswordComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* ForgotPasswordComponent */}
      <TypicalAuthFormComponent 
        formHeader={props.formHeader} 
        formInput={props.formInput} 
        formValueSchema={props.formValueSchema} 
        formValueDefault={props.formValueDefault}
        apiHandler={props.apiHandler}
        apiCall={props.apiCall} // For Loading Only
      />
    </React.Fragment>
  )
}

export default ForgotPasswordComponent;

import React from "react"

import TypicalAuthFormComponent from "../../component/aTypicalAuthFormComponent"


type SignUpComponentType = {
  formHeader: any,
  formInput: any,
  formValueSchema: any,
  formValueDefault: any,
  apiHandler: any
  apiCall: any, // For Loading Only
}

const SignUpComponent = (props: SignUpComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* SignUpComponent */}
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

export default SignUpComponent;

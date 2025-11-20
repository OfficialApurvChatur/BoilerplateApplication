import React from "react"

import TypicalCreateComponent from "../../../../component/bTypicalCreateComponent";


type SignOutCreateComponentType = {
  formHeader: any,
  formData: any,
  formValueSchema: any,
  formValueDefault: any,
  apiHandler: any,
  apiCall: any
}

const SignOutCreateComponent = (props: SignOutCreateComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* SignOutCreateComponent */}
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

export default SignOutCreateComponent;

import React from "react"

import TypicalCreateComponent from "../../../../component/bTypicalCreateComponent";


type ResetPasswordCreateComponentType = {
  formHeader: any,
  formData: any,
  formValueSchema: any,
  formValueDefault: any,
  apiHandler: any,
  apiCall: any
}

const ResetPasswordCreateComponent = (props: ResetPasswordCreateComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* ResetPasswordCreateComponent */}
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

export default ResetPasswordCreateComponent;

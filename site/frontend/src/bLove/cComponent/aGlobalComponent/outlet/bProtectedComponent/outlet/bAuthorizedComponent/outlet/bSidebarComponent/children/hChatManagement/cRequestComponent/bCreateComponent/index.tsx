import React from "react"

import TypicalCreateComponent from "../../../../component/bTypicalCreateComponent";


type RequestCreateComponentType = {
  formHeader: any,
  formData: any,
  formValueSchema: any,
  formValueDefault: any,
  apiHandler: any,
  apiCall: any
}

const RequestCreateComponent = (props: RequestCreateComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* RequestCreateComponent */}
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

export default RequestCreateComponent;

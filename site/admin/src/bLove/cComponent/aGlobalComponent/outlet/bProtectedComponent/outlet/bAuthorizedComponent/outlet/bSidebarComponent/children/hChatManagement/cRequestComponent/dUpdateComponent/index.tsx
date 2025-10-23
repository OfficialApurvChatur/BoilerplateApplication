import React from "react"

import TypicalUpdateComponent from "../../../../component/dTypicalUpdateComponent";


type RequestUpdateComponentType = {
  formHeader: any,
  formData: any,
  formValueSchema: any,
  formValueDefault: any,
  formValuePrevious: any,
  apiHandler: any
  apiCall: any
}

const RequestUpdateComponent = (props: RequestUpdateComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* RequestUpdateComponent */}
      <TypicalUpdateComponent 
        formHeader={props.formHeader} 
        formData={props.formData} 
        formValueSchema={props.formValueSchema} 
        formValueDefault={props.formValueDefault} 
        formValuePrevious= {props.formValuePrevious}
        apiHandler={props.apiHandler}
        apiCall= {props.apiCall}
      />
    </React.Fragment>
  )
}

export default RequestUpdateComponent;

import React from "react"

import TypicalCreateComponent from "../../../../component/bTypicalCreateComponent";


type ServiceCreateComponentType = {
  formHeader: any,
  formData: any,
  formValueSchema: any,
  formValueDefault: any,
  apiHandler: any,
  apiCall: any
}

const ServiceCreateComponent = (props: ServiceCreateComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* ServiceCreateComponent */}
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

export default ServiceCreateComponent;

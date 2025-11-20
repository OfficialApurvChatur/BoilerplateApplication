import React from "react"

import TypicalCreateComponent from "../../../../component/bTypicalCreateComponent";


type RoleCreateComponentType = {
  formHeader: any,
  formData: any,
  formValueSchema: any,
  formValueDefault: any,
  apiHandler: any,
  apiCall: any
}

const RoleCreateComponent = (props: RoleCreateComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* RoleCreateComponent */}
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

export default RoleCreateComponent;

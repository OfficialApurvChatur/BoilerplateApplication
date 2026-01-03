import React from "react"

import TypicalCreateComponent from "../../../../component/bTypicalCreateComponent";


type AdminProjectCreateComponentType = {
  formHeader: any,
  formData: any,
  formValueSchema: any,
  formValueDefault: any,
  apiHandler: any,
  apiCall: any
}

const AdminProjectCreateComponent = (props: AdminProjectCreateComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AdminProjectCreateComponent */}
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

export default AdminProjectCreateComponent;

import React from "react"

import TypicalCreateComponent from "../../../../component/bTypicalCreateComponent";


type AdminProjectGroupCreateComponentType = {
  formHeader: any,
  formData: any,
  formValueSchema: any,
  formValueDefault: any,
  apiHandler: any,
  apiCall: any
}

const AdminProjectGroupCreateComponent = (props: AdminProjectGroupCreateComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AdminProjectGroupCreateComponent */}
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

export default AdminProjectGroupCreateComponent;

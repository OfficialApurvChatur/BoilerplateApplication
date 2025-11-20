import React from "react"

import TypicalCreateComponent from "../../../../component/bTypicalCreateComponent";


type AdminBranchGroupCreateComponentType = {
  formHeader: any,
  formData: any,
  formValueSchema: any,
  formValueDefault: any,
  apiHandler: any,
  apiCall: any
}

const AdminBranchGroupCreateComponent = (props: AdminBranchGroupCreateComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AdminBranchGroupCreateComponent */}
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

export default AdminBranchGroupCreateComponent;

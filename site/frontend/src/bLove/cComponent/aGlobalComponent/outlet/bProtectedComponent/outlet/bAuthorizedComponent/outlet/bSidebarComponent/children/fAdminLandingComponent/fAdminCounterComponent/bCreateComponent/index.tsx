import React from "react"

import TypicalCreateComponent from "../../../../component/bTypicalCreateComponent";


type AdminCounterCreateComponentType = {
  formHeader: any,
  formData: any,
  formValueSchema: any,
  formValueDefault: any,
  apiHandler: any,
  apiCall: any
}

const AdminCounterCreateComponent = (props: AdminCounterCreateComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AdminCounterCreateComponent */}
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

export default AdminCounterCreateComponent;

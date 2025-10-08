import React from "react"

import TypicalCreateComponent from "../../../../component/bTypicalCreateComponent";


type AdminContactFormCreateComponentType = {
  formHeader: any,
  formData: any,
  formValueSchema: any,
  formValueDefault: any,
  apiHandler: any,
  apiCall: any
}

const AdminContactFormCreateComponent = (props: AdminContactFormCreateComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AdminContactFormCreateComponent */}
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

export default AdminContactFormCreateComponent;

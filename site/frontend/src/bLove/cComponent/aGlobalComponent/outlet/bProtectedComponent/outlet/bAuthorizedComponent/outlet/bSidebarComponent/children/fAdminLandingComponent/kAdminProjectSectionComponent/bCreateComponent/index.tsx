import React from "react"

import TypicalCreateComponent from "../../../../component/bTypicalCreateComponent";


type AdminProjectSectionCreateComponentType = {
  formHeader: any,
  formData: any,
  formValueSchema: any,
  formValueDefault: any,
  apiHandler: any,
  apiCall: any
}

const AdminProjectSectionCreateComponent = (props: AdminProjectSectionCreateComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AdminProjectSectionCreateComponent */}
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

export default AdminProjectSectionCreateComponent;

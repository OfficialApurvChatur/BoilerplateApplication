import React from "react"

import TypicalCreateComponent from "../../../../component/bTypicalCreateComponent";


type AdminAboutCompanyCreateComponentType = {
  formHeader: any,
  formData: any,
  formValueSchema: any,
  formValueDefault: any,
  apiHandler: any,
  apiCall: any
}

const AdminAboutCompanyCreateComponent = (props: AdminAboutCompanyCreateComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AdminAboutCompanyCreateComponent */}
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

export default AdminAboutCompanyCreateComponent;

import React from "react"

import TypicalCreateComponent from "../../../../component/bTypicalCreateComponent";


type AccountCreateComponentType = {
  formHeader: any,
  formData: any,
  formValueSchema: any,
  formValueDefault: any,
  apiHandler: any,
  apiCall: any
}

const AccountCreateComponent = (props: AccountCreateComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AccountCreateComponent */}
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

export default AccountCreateComponent;

import React from "react"

import TypicalCreateComponent from "../../../../component/bTypicalCreateComponent";


type BranchCreateComponentType = {
  formHeader: any,
  formData: any,
  formValueSchema: any,
  formValueDefault: any,
  apiHandler: any,
  apiCall: any
}

const BranchCreateComponent = (props: BranchCreateComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* BranchCreateComponent */}
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

export default BranchCreateComponent;

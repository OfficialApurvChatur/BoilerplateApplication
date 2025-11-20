import React from "react"

import TypicalCreateComponent from "../../../../component/bTypicalCreateComponent";


type BranchSectionCreateComponentType = {
  formHeader: any,
  formData: any,
  formValueSchema: any,
  formValueDefault: any,
  apiHandler: any,
  apiCall: any
}

const BranchSectionCreateComponent = (props: BranchSectionCreateComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* BranchSectionCreateComponent */}
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

export default BranchSectionCreateComponent;

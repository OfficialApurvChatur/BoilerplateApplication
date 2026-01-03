import React from "react"

import TypicalCreateComponent from "../../../../component/bTypicalCreateComponent";


type SocialMediaContentCreateComponentType = {
  formHeader: any,
  formData: any,
  formValueSchema: any,
  formValueDefault: any,
  apiHandler: any,
  apiCall: any
}

const SocialMediaContentCreateComponent = (props: SocialMediaContentCreateComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* SocialMediaContentCreateComponent */}
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

export default SocialMediaContentCreateComponent;

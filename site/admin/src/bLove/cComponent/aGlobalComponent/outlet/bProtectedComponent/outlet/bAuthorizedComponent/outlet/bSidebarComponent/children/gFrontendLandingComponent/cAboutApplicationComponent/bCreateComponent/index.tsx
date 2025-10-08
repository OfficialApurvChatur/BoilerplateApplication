import React from "react"

import TypicalCreateComponent from "../../../../component/bTypicalCreateComponent";


type AboutApplicationCreateComponentType = {
  formHeader: any,
  formData: any,
  formValueSchema: any,
  formValueDefault: any,
  apiHandler: any,
  apiCall: any
}

const AboutApplicationCreateComponent = (props: AboutApplicationCreateComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AboutApplicationCreateComponent */}
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

export default AboutApplicationCreateComponent;

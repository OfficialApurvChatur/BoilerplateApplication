import React from "react"

import TypicalCreateComponent from "../../../../component/bTypicalCreateComponent";


type HeroCreateComponentType = {
  formHeader: any,
  formData: any,
  formValueSchema: any,
  formValueDefault: any,
  apiHandler: any,
  apiCall: any
}

const HeroCreateComponent = (props: HeroCreateComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* HeroCreateComponent */}
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

export default HeroCreateComponent;

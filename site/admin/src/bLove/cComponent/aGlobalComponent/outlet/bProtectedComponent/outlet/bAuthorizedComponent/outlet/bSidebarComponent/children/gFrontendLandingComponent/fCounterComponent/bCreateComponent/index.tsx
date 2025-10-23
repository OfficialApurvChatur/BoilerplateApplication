import React from "react"

import TypicalCreateComponent from "../../../../component/bTypicalCreateComponent";


type CounterCreateComponentType = {
  formHeader: any,
  formData: any,
  formValueSchema: any,
  formValueDefault: any,
  apiHandler: any,
  apiCall: any
}

const CounterCreateComponent = (props: CounterCreateComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* CounterCreateComponent */}
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

export default CounterCreateComponent;

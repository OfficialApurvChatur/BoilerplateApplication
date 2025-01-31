import React from "react"

import TypicalCreateComponent from "../../../../component/bTypicalCreateComponent";


type PolicyCreateComponentType = {
  header: { title: string, subtitle: string, buttons: { text: string, to: string }[] },
  data: any,
  formSchema: any,
  formDefaultValue: any,
  APICall: any,
  submitHandler: any
}

const PolicyCreateComponent = (props: PolicyCreateComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* PolicyCreateComponent */}
      <TypicalCreateComponent 
        header={props.header} 
        data={props.data} 
        formSchema={props.formSchema} 
        formDefaultValue={props.formDefaultValue}
        APICall={props.APICall} 
        submitHandler={props.submitHandler}
      />
    </React.Fragment>
  )
}

export default PolicyCreateComponent;

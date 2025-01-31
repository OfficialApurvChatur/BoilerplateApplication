import React from "react"

import TypicalUpdateComponent from "../../../../component/dTypicalUpdateComponent";


type PolicyUpdateComponentType = {
  header: { title: string, subtitle: string, buttons: { text: string, to: string }[] },
  data: any,
  formSchema: any,
  formDefaultValue: any,
  params: any
}

const PolicyUpdateComponent = (props: PolicyUpdateComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* PolicyUpdateComponent */}
      <TypicalUpdateComponent 
        header={props.header} 
        data={props.data} 
        formSchema={props.formSchema} 
        formDefaultValue={props.formDefaultValue} 
        params= {props.params}
      />
    </React.Fragment>
  )
}

export default PolicyUpdateComponent;

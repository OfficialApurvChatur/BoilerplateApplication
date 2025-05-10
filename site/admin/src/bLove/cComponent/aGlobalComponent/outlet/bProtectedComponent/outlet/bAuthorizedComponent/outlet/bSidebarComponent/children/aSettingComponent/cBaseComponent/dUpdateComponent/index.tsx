import React from "react"

import TypicalUpdateComponent from "../../../../component/dTypicalUpdateComponent";


type BaseUpdateComponentType = {
  header: { 
    title: string, 
    subtitle: string, 
    actions: { text: string, icon?: any, onClick: any }[], 
    links: { text: string, icon?: any, to: string }[] 
  },
  data: any,
  formSchema: any,
  formDefaultValue: any,
  previousValue: any,
  apiCall: any
  submitHandler: any
}

const BaseUpdateComponent = (props: BaseUpdateComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* BaseUpdateComponent */}
      <TypicalUpdateComponent 
        header={props.header} 
        data={props.data} 
        formSchema={props.formSchema} 
        formDefaultValue={props.formDefaultValue} 
        previousValue= {props.previousValue}
        apiCall= {props.apiCall}
        submitHandler={props.submitHandler}
      />
    </React.Fragment>
  )
}

export default BaseUpdateComponent;

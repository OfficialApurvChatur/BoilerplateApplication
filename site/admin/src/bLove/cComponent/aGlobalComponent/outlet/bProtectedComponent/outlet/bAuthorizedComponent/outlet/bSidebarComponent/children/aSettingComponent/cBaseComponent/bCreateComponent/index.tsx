import React from "react"

import TypicalCreateComponent from "../../../../component/bTypicalCreateComponent";


type BaseCreateComponentType = {
  header: { 
    title: string, 
    subtitle: string, 
    actions: { text: string, icon?: any, onClick: any }[], 
    links: { text: string, icon?: any, to: string }[] 
  },
  data: any,
  formSchema: any,
  formDefaultValue: any,
  apiCall: any,
  submitHandler: any
}

const BaseCreateComponent = (props: BaseCreateComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* BaseCreateComponent */}
      <TypicalCreateComponent 
        header={props.header} 
        data={props.data} 
        formSchema={props.formSchema} 
        formDefaultValue={props.formDefaultValue}
        apiCall={props.apiCall} 
        submitHandler={props.submitHandler}
      />
    </React.Fragment>
  )
}

export default BaseCreateComponent;

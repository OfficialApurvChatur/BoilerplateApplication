import React from "react"

import TypicalCreateComponent from "../../../../component/bTypicalCreateComponent";


type AccessPointCreateComponentType = {
  header: { 
    title: string, 
    subtitle: string, 
    actions: { text: string, icon?: any, onClick: any }[], 
    links: { text: string, icon?: any, to: string }[] 
  },
  data: any,
  formSchema: any,
  formDefaultValue: any,
  ReduxCall: any,
  APICall: any,
  submitHandler: any
}

const AccessPointCreateComponent = (props: AccessPointCreateComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AccessPointCreateComponent */}
      <TypicalCreateComponent 
        header={props.header} 
        data={props.data} 
        formSchema={props.formSchema} 
        formDefaultValue={props.formDefaultValue}
        ReduxCall={props.ReduxCall} 
        APICall={props.APICall} 
        submitHandler={props.submitHandler}
      />
    </React.Fragment>
  )
}

export default AccessPointCreateComponent;

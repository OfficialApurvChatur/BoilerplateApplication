import React from "react"

import TypicalCreateComponent from "../../../../component/bTypicalCreateComponent";


type UserCreateComponentType = {
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

const UserCreateComponent = (props: UserCreateComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* UserCreateComponent */}
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

export default UserCreateComponent;

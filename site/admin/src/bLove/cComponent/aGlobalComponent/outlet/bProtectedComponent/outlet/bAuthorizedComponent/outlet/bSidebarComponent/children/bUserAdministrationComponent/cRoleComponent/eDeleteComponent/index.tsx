import React from "react"

import TypicalDeleteComponent from "../../../../component/eTypicalDeleteComponent"


type RoleDeleteComponentType = {
  header: { 
    title: string, 
    subtitle: string, 
    actions: { text: string, icon?: any, onClick: any }[], 
    links: { text: string, icon?: any, to: string }[] 
  },
  data: any,
  params: any,
  ReduxCall: any,
  APICall: any
  submitHandler: any
}

const RoleDeleteComponent = (props: RoleDeleteComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* RoleDeleteComponent */}
      <TypicalDeleteComponent 
        header={props.header} 
        data={props.data}
        params= {props.params}
        ReduxCall={props.ReduxCall} 
        APICall= {props.APICall}
        submitHandler={props.submitHandler}
      />
    </React.Fragment>
  )
}

export default RoleDeleteComponent;

import React from "react"

import TypicalDeleteComponent from "../../../../component/eTypicalDeleteComponent"


type HeroDeleteComponentType = {
  header: { 
    title: string, 
    subtitle: string, 
    actions: { text: string, icon?: any, onClick: any }[], 
    links: { text: string, icon?: any, to: string }[] 
  },
  data: any,
  params: any,
  APICall: any
  submitHandler: any
}

const HeroDeleteComponent = (props: HeroDeleteComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* HeroDeleteComponent */}
      <TypicalDeleteComponent 
        header={props.header} 
        data={props.data}
        params= {props.params}
        APICall= {props.APICall}
        submitHandler={props.submitHandler}
      />
    </React.Fragment>
  )
}

export default HeroDeleteComponent;

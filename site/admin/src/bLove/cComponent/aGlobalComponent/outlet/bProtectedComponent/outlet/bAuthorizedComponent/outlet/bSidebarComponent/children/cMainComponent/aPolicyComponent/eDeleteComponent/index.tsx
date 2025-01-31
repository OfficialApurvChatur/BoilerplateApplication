import React from "react"

import TypicalDeleteComponent from "../../../../component/eTypicalDeleteComponent"


type PolicyDeleteComponentType = {
  header: { title: string, subtitle: string, buttons: { text: string, to: string }[] },
  data: any,
  params: any
}

const PolicyDeleteComponent = (props: PolicyDeleteComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* PolicyDeleteComponent */}
      <TypicalDeleteComponent 
        header={props.header} 
        data={props.data}
        params= {props.params}
      />
    </React.Fragment>
  )
}

export default PolicyDeleteComponent;

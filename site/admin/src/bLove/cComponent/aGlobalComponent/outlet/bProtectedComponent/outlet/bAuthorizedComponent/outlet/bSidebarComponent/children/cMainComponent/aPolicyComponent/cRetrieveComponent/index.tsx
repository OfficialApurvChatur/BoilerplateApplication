import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type PolicyRetrieveComponentType = {
  header: { title: string, subtitle: string, buttons: { text: string, to: string }[] },
  data: any,
  params: any
}

const PolicyRetrieveComponent = (props: PolicyRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* PolicyRetrieveComponent */}
      <TypicalRetrieveComponent 
        header={props.header} 
        data={props.data}
        params= {props.params}
      />
    </React.Fragment>
  )
}

export default PolicyRetrieveComponent;

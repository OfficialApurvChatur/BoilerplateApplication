import React from "react"

import TypicalListComponent from "../../../../component/aTypicalListComponent";


type ForgotPasswordListComponentType = {
  listHeader: any,
  listColumn: any,
  listData: any,
  apiCall: any
}

const ForgotPasswordListComponent = (props: ForgotPasswordListComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* ForgotPasswordListComponent */}
      <TypicalListComponent 
        listHeader={props.listHeader} 
        listColumn={props.listColumn} 
        listData={props.listData} 
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default ForgotPasswordListComponent;

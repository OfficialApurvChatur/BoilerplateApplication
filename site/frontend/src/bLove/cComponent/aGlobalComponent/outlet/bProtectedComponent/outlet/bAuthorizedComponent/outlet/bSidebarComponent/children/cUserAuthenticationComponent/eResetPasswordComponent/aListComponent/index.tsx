import React from "react"

import TypicalListComponent from "../../../../component/aTypicalListComponent";


type ResetPasswordListComponentType = {
  listHeader: any,
  listColumn: any,
  listData: any,
  apiCall: any
}

const ResetPasswordListComponent = (props: ResetPasswordListComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* ResetPasswordListComponent */}
      <TypicalListComponent 
        listHeader={props.listHeader} 
        listColumn={props.listColumn} 
        listData={props.listData} 
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default ResetPasswordListComponent;

import React from "react"

import TypicalListComponent from "../../../../component/aTypicalListComponent";


type SignUpListComponentType = {
  listHeader: any,
  listColumn: any,
  listData: any,
  apiCall: any
}

const SignUpListComponent = (props: SignUpListComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* SignUpListComponent */}
      <TypicalListComponent 
        listHeader={props.listHeader} 
        listColumn={props.listColumn} 
        listData={props.listData} 
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default SignUpListComponent;

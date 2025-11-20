import React from "react"

import TypicalListComponent from "../../../../component/aTypicalListComponent";


type SignInListComponentType = {
  listHeader: any,
  listColumn: any,
  listData: any,
  apiCall: any
}

const SignInListComponent = (props: SignInListComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* SignInListComponent */}
      <TypicalListComponent 
        listHeader={props.listHeader} 
        listColumn={props.listColumn} 
        listData={props.listData} 
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default SignInListComponent;

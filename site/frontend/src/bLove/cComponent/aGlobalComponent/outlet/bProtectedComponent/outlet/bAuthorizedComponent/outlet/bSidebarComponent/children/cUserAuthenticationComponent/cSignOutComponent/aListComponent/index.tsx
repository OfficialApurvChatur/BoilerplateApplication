import React from "react"

import TypicalListComponent from "../../../../component/aTypicalListComponent";


type SignOutListComponentType = {
  listHeader: any,
  listColumn: any,
  listData: any,
  apiCall: any
}

const SignOutListComponent = (props: SignOutListComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* SignOutListComponent */}
      <TypicalListComponent 
        listHeader={props.listHeader} 
        listColumn={props.listColumn} 
        listData={props.listData} 
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default SignOutListComponent;

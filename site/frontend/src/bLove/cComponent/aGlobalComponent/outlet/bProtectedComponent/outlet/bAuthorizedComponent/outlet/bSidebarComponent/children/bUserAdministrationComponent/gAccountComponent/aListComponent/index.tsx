import React from "react"

import TypicalListComponent from "../../../../component/aTypicalListComponent";


type AccountListComponentType = {
  listHeader: any,
  listColumn: any,
  listData: any,
  apiCall: any
}

const AccountListComponent = (props: AccountListComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AccountListComponent */}
      <TypicalListComponent 
        listHeader={props.listHeader} 
        listColumn={props.listColumn} 
        listData={props.listData} 
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default AccountListComponent;

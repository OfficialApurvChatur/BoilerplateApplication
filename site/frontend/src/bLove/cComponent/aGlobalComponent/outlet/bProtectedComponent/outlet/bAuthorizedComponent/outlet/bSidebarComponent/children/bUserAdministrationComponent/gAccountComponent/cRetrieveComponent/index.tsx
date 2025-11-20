import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type AccountRetrieveComponentType = {
  pageHeader: any,
  pageData: any,
  apiCall: any
}

const AccountRetrieveComponent = (props: AccountRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AccountRetrieveComponent */}
      <TypicalRetrieveComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default AccountRetrieveComponent;

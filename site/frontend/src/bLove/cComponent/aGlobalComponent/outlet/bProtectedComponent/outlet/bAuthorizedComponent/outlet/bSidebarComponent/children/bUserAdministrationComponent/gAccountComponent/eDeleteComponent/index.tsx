import React from "react"

import TypicalDeleteComponent from "../../../../component/eTypicalDeleteComponent"


type AccountDeleteComponentType = {
  pageHeader: any,
  pageData: any,
  apiHandler: any
  apiCall: any
}

const AccountDeleteComponent = (props: AccountDeleteComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AccountDeleteComponent */}
      <TypicalDeleteComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiHandler={props.apiHandler}
        apiCall= {props.apiCall}
      />
    </React.Fragment>
  )
}

export default AccountDeleteComponent;

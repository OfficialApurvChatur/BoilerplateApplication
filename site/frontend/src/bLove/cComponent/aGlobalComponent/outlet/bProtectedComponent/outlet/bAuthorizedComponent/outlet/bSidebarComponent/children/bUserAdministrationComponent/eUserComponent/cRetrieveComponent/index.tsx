import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type UserRetrieveComponentType = {
  pageHeader: any,
  pageData: any,
  apiCall: any
}

const UserRetrieveComponent = (props: UserRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* UserRetrieveComponent */}
      <TypicalRetrieveComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default UserRetrieveComponent;

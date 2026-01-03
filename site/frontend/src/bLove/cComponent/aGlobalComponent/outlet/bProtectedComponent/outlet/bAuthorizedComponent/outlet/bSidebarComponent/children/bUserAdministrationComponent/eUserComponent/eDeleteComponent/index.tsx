import React from "react"

import TypicalDeleteComponent from "../../../../component/eTypicalDeleteComponent"


type UserDeleteComponentType = {
  pageHeader: any,
  pageData: any,
  apiHandler: any
  apiCall: any
}

const UserDeleteComponent = (props: UserDeleteComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* UserDeleteComponent */}
      <TypicalDeleteComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiHandler={props.apiHandler}
        apiCall= {props.apiCall}
      />
    </React.Fragment>
  )
}

export default UserDeleteComponent;

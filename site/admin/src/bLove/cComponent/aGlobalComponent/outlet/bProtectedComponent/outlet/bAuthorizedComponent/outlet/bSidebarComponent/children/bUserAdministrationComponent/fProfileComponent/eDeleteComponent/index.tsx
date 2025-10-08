import React from "react"

import TypicalDeleteComponent from "../../../../component/eTypicalDeleteComponent"


type ProfileDeleteComponentType = {
  pageHeader: any,
  pageData: any,
  apiHandler: any
  apiCall: any
}

const ProfileDeleteComponent = (props: ProfileDeleteComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* ProfileDeleteComponent */}
      <TypicalDeleteComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiHandler={props.apiHandler}
        apiCall= {props.apiCall}
      />
    </React.Fragment>
  )
}

export default ProfileDeleteComponent;

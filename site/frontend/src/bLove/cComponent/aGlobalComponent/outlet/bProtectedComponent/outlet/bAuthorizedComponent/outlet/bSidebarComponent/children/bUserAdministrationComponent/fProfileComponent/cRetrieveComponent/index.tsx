import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type ProfileRetrieveComponentType = {
  pageHeader: any,
  pageData: any,
  apiCall: any
}

const ProfileRetrieveComponent = (props: ProfileRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* ProfileRetrieveComponent */}
      <TypicalRetrieveComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default ProfileRetrieveComponent;

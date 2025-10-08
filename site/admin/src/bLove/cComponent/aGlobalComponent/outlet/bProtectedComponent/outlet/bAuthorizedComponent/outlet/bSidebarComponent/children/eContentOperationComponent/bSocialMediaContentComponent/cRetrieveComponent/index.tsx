import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type SocialMediaContentRetrieveComponentType = {
  pageHeader: any,
  pageData: any,
  apiCall: any
}

const SocialMediaContentRetrieveComponent = (props: SocialMediaContentRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* SocialMediaContentRetrieveComponent */}
      <TypicalRetrieveComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default SocialMediaContentRetrieveComponent;

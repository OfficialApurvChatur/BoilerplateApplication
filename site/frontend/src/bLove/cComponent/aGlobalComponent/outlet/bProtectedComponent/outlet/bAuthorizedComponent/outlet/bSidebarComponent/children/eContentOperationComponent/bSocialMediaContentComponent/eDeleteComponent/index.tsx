import React from "react"

import TypicalDeleteComponent from "../../../../component/eTypicalDeleteComponent"


type SocialMediaContentDeleteComponentType = {
  pageHeader: any,
  pageData: any,
  apiHandler: any
  apiCall: any
}

const SocialMediaContentDeleteComponent = (props: SocialMediaContentDeleteComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* SocialMediaContentDeleteComponent */}
      <TypicalDeleteComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiHandler={props.apiHandler}
        apiCall= {props.apiCall}
      />
    </React.Fragment>
  )
}

export default SocialMediaContentDeleteComponent;

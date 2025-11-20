import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type AboutCompanyRetrieveComponentType = {
  pageHeader: any,
  pageData: any,
  apiCall: any
}

const AboutCompanyRetrieveComponent = (props: AboutCompanyRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AboutCompanyRetrieveComponent */}
      <TypicalRetrieveComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default AboutCompanyRetrieveComponent;

import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type AboutApplicationRetrieveComponentType = {
  pageHeader: any,
  pageData: any,
  apiCall: any
}

const AboutApplicationRetrieveComponent = (props: AboutApplicationRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AboutApplicationRetrieveComponent */}
      <TypicalRetrieveComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default AboutApplicationRetrieveComponent;

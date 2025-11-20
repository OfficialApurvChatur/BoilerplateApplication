import React from "react"

import TypicalDeleteComponent from "../../../../component/eTypicalDeleteComponent"


type AboutCompanyDeleteComponentType = {
  pageHeader: any,
  pageData: any,
  apiHandler: any
  apiCall: any
}

const AboutCompanyDeleteComponent = (props: AboutCompanyDeleteComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AboutCompanyDeleteComponent */}
      <TypicalDeleteComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiHandler={props.apiHandler}
        apiCall= {props.apiCall}
      />
    </React.Fragment>
  )
}

export default AboutCompanyDeleteComponent;

import React from "react"

import TypicalDeleteComponent from "../../../../component/eTypicalDeleteComponent"


type AboutApplicationDeleteComponentType = {
  pageHeader: any,
  pageData: any,
  apiHandler: any
  apiCall: any
}

const AboutApplicationDeleteComponent = (props: AboutApplicationDeleteComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AboutApplicationDeleteComponent */}
      <TypicalDeleteComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiHandler={props.apiHandler}
        apiCall= {props.apiCall}
      />
    </React.Fragment>
  )
}

export default AboutApplicationDeleteComponent;

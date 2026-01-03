import React from "react"

import TypicalDeleteComponent from "../../../../component/eTypicalDeleteComponent"


type HeroDeleteComponentType = {
  pageHeader: any,
  pageData: any,
  apiHandler: any
  apiCall: any
}

const HeroDeleteComponent = (props: HeroDeleteComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* HeroDeleteComponent */}
      <TypicalDeleteComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiHandler={props.apiHandler}
        apiCall= {props.apiCall}
      />
    </React.Fragment>
  )
}

export default HeroDeleteComponent;

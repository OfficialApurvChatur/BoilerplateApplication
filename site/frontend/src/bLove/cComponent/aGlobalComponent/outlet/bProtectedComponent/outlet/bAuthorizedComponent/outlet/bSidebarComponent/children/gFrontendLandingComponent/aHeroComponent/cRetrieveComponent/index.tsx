import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type HeroRetrieveComponentType = {
  pageHeader: any,
  pageData: any,
  apiCall: any
}

const HeroRetrieveComponent = (props: HeroRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* HeroRetrieveComponent */}
      <TypicalRetrieveComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default HeroRetrieveComponent;

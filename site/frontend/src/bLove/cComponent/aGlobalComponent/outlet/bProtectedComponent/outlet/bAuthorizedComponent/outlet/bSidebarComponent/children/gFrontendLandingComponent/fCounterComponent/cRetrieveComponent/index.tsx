import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type CounterRetrieveComponentType = {
  pageHeader: any,
  pageData: any,
  apiCall: any
}

const CounterRetrieveComponent = (props: CounterRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* CounterRetrieveComponent */}
      <TypicalRetrieveComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default CounterRetrieveComponent;

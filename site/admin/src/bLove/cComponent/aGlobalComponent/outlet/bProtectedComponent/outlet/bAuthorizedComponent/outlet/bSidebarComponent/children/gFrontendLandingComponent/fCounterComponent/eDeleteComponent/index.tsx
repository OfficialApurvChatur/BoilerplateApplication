import React from "react"

import TypicalDeleteComponent from "../../../../component/eTypicalDeleteComponent"


type CounterDeleteComponentType = {
  pageHeader: any,
  pageData: any,
  apiHandler: any
  apiCall: any
}

const CounterDeleteComponent = (props: CounterDeleteComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* CounterDeleteComponent */}
      <TypicalDeleteComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiHandler={props.apiHandler}
        apiCall= {props.apiCall}
      />
    </React.Fragment>
  )
}

export default CounterDeleteComponent;

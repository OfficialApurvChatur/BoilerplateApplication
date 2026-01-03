import React from "react"

import TypicalListComponent from "../../../../component/aTypicalListComponent";


type CounterListComponentType = {
  listHeader: any,
  listColumn: any,
  listData: any,
  apiCall: any
}

const CounterListComponent = (props: CounterListComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* CounterListComponent */}
      <TypicalListComponent 
        listHeader={props.listHeader} 
        listColumn={props.listColumn} 
        listData={props.listData} 
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default CounterListComponent;

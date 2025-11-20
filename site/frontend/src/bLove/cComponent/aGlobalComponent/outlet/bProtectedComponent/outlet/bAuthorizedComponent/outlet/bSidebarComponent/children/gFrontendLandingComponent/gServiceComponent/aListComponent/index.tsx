import React from "react"

import TypicalListComponent from "../../../../component/aTypicalListComponent";


type ServiceListComponentType = {
  listHeader: any,
  listColumn: any,
  listData: any,
  apiCall: any
}

const ServiceListComponent = (props: ServiceListComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* ServiceListComponent */}
      <TypicalListComponent 
        listHeader={props.listHeader} 
        listColumn={props.listColumn} 
        listData={props.listData} 
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default ServiceListComponent;

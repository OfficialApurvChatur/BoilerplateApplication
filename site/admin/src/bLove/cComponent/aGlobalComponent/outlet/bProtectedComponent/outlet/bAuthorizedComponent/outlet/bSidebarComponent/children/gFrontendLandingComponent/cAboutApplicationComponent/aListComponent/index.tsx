import React from "react"

import TypicalListComponent from "../../../../component/aTypicalListComponent";


type AboutApplicationListComponentType = {
  listHeader: any,
  listColumn: any,
  listData: any,
  apiCall: any
}

const AboutApplicationListComponent = (props: AboutApplicationListComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AboutApplicationListComponent */}
      <TypicalListComponent 
        listHeader={props.listHeader} 
        listColumn={props.listColumn} 
        listData={props.listData} 
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default AboutApplicationListComponent;

import React from "react"

import TypicalListComponent from "../../../../component/aTypicalListComponent";


type AboutCompanyListComponentType = {
  listHeader: any,
  listColumn: any,
  listData: any,
  apiCall: any
}

const AboutCompanyListComponent = (props: AboutCompanyListComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AboutCompanyListComponent */}
      <TypicalListComponent 
        listHeader={props.listHeader} 
        listColumn={props.listColumn} 
        listData={props.listData} 
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default AboutCompanyListComponent;

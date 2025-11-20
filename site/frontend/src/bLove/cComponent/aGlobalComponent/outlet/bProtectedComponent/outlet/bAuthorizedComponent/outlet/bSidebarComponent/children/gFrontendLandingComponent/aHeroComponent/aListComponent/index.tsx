import React from "react"

import TypicalListComponent from "../../../../component/aTypicalListComponent";


type HeroListComponentType = {
  listHeader: any,
  listColumn: any,
  listData: any,
  apiCall: any
}

const HeroListComponent = (props: HeroListComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* HeroListComponent */}
      <TypicalListComponent 
        listHeader={props.listHeader} 
        listColumn={props.listColumn} 
        listData={props.listData} 
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default HeroListComponent;

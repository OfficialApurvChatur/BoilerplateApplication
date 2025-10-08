import React from "react"

import TypicalListComponent from "../../../../component/aTypicalListComponent";


type SocialMediaContentListComponentType = {
  listHeader: any,
  listColumn: any,
  listData: any,
  apiCall: any
}

const SocialMediaContentListComponent = (props: SocialMediaContentListComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* SocialMediaContentListComponent */}
      <TypicalListComponent 
        listHeader={props.listHeader} 
        listColumn={props.listColumn} 
        listData={props.listData} 
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default SocialMediaContentListComponent;

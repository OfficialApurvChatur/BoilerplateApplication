import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type MenuRetrieveComponentType = {
  pageHeader: any,
  pageData: any,
  apiCall: any
}

const MenuRetrieveComponent = (props: MenuRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* MenuRetrieveComponent */}
      <TypicalRetrieveComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default MenuRetrieveComponent;

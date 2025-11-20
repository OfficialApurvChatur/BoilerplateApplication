import React from "react"

import TypicalDeleteComponent from "../../../../component/eTypicalDeleteComponent"


type MenuDeleteComponentType = {
  pageHeader: any,
  pageData: any,
  apiHandler: any
  apiCall: any
}

const MenuDeleteComponent = (props: MenuDeleteComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* MenuDeleteComponent */}
      <TypicalDeleteComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiHandler={props.apiHandler}
        apiCall= {props.apiCall}
      />
    </React.Fragment>
  )
}

export default MenuDeleteComponent;

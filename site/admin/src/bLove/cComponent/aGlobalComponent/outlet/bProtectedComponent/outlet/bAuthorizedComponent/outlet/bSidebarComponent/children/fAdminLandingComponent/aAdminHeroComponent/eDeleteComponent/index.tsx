import React from "react"

import TypicalDeleteComponent from "../../../../component/eTypicalDeleteComponent"


type AdminHeroDeleteComponentType = {
  pageHeader: any,
  pageData: any,
  apiHandler: any
  apiCall: any
}

const AdminHeroDeleteComponent = (props: AdminHeroDeleteComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AdminHeroDeleteComponent */}
      <TypicalDeleteComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiHandler={props.apiHandler}
        apiCall= {props.apiCall}
      />
    </React.Fragment>
  )
}

export default AdminHeroDeleteComponent;

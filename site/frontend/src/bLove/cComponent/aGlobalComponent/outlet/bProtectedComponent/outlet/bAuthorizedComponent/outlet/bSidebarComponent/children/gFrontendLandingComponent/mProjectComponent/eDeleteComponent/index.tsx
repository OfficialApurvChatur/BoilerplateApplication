import React from "react"

import TypicalDeleteComponent from "../../../../component/eTypicalDeleteComponent"


type ProjectDeleteComponentType = {
  pageHeader: any,
  pageData: any,
  apiHandler: any
  apiCall: any
}

const ProjectDeleteComponent = (props: ProjectDeleteComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* ProjectDeleteComponent */}
      <TypicalDeleteComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiHandler={props.apiHandler}
        apiCall= {props.apiCall}
      />
    </React.Fragment>
  )
}

export default ProjectDeleteComponent;

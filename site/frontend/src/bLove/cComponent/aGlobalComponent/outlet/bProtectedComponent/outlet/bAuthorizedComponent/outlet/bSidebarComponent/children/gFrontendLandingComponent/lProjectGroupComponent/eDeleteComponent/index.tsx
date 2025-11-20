import React from "react"

import TypicalDeleteComponent from "../../../../component/eTypicalDeleteComponent"


type ProjectGroupDeleteComponentType = {
  pageHeader: any,
  pageData: any,
  apiHandler: any
  apiCall: any
}

const ProjectGroupDeleteComponent = (props: ProjectGroupDeleteComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* ProjectGroupDeleteComponent */}
      <TypicalDeleteComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiHandler={props.apiHandler}
        apiCall= {props.apiCall}
      />
    </React.Fragment>
  )
}

export default ProjectGroupDeleteComponent;

import React from "react"

import TypicalDeleteComponent from "../../../../component/eTypicalDeleteComponent"


type ProjectSectionDeleteComponentType = {
  pageHeader: any,
  pageData: any,
  apiHandler: any
  apiCall: any
}

const ProjectSectionDeleteComponent = (props: ProjectSectionDeleteComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* ProjectSectionDeleteComponent */}
      <TypicalDeleteComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiHandler={props.apiHandler}
        apiCall= {props.apiCall}
      />
    </React.Fragment>
  )
}

export default ProjectSectionDeleteComponent;

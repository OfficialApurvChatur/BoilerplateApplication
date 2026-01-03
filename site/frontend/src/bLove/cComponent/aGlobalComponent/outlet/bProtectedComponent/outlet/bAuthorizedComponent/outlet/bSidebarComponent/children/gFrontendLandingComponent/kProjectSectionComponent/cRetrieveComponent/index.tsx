import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type ProjectSectionRetrieveComponentType = {
  pageHeader: any,
  pageData: any,
  apiCall: any
}

const ProjectSectionRetrieveComponent = (props: ProjectSectionRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* ProjectSectionRetrieveComponent */}
      <TypicalRetrieveComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default ProjectSectionRetrieveComponent;

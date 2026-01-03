import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type ProjectRetrieveComponentType = {
  pageHeader: any,
  pageData: any,
  apiCall: any
}

const ProjectRetrieveComponent = (props: ProjectRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* ProjectRetrieveComponent */}
      <TypicalRetrieveComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default ProjectRetrieveComponent;

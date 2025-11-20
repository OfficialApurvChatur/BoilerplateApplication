import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type ProjectGroupRetrieveComponentType = {
  pageHeader: any,
  pageData: any,
  apiCall: any
}

const ProjectGroupRetrieveComponent = (props: ProjectGroupRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* ProjectGroupRetrieveComponent */}
      <TypicalRetrieveComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default ProjectGroupRetrieveComponent;

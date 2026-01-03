import React from "react"

import TypicalListComponent from "../../../../component/aTypicalListComponent";


type ProjectSectionListComponentType = {
  listHeader: any,
  listColumn: any,
  listData: any,
  apiCall: any
}

const ProjectSectionListComponent = (props: ProjectSectionListComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* ProjectSectionListComponent */}
      <TypicalListComponent 
        listHeader={props.listHeader} 
        listColumn={props.listColumn} 
        listData={props.listData} 
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default ProjectSectionListComponent;

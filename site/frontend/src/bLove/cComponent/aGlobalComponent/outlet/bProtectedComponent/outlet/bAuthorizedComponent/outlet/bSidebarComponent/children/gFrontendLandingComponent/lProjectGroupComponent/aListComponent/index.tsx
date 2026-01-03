import React from "react"

import TypicalListComponent from "../../../../component/aTypicalListComponent";


type ProjectGroupListComponentType = {
  listHeader: any,
  listColumn: any,
  listData: any,
  apiCall: any
}

const ProjectGroupListComponent = (props: ProjectGroupListComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* ProjectGroupListComponent */}
      <TypicalListComponent 
        listHeader={props.listHeader} 
        listColumn={props.listColumn} 
        listData={props.listData} 
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default ProjectGroupListComponent;

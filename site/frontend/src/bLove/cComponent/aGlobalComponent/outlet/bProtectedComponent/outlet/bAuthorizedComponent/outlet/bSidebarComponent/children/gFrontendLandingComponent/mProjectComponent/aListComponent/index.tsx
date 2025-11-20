import React from "react"

import TypicalListComponent from "../../../../component/aTypicalListComponent";


type ProjectListComponentType = {
  listHeader: any,
  listColumn: any,
  listData: any,
  apiCall: any
}

const ProjectListComponent = (props: ProjectListComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* ProjectListComponent */}
      <TypicalListComponent 
        listHeader={props.listHeader} 
        listColumn={props.listColumn} 
        listData={props.listData} 
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default ProjectListComponent;

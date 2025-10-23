import React from "react"

import TypicalCreateComponent from "../../../../component/bTypicalCreateComponent";


type ProjectCreateComponentType = {
  formHeader: any,
  formData: any,
  formValueSchema: any,
  formValueDefault: any,
  apiHandler: any,
  apiCall: any
}

const ProjectCreateComponent = (props: ProjectCreateComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* ProjectCreateComponent */}
      <TypicalCreateComponent 
        formHeader={props.formHeader} 
        formData={props.formData} 
        formValueSchema={props.formValueSchema} 
        formValueDefault={props.formValueDefault}
        apiHandler={props.apiHandler}
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default ProjectCreateComponent;

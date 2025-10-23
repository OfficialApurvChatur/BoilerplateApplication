import React from "react"

import TypicalCreateComponent from "../../../../component/bTypicalCreateComponent";


type ProjectSectionCreateComponentType = {
  formHeader: any,
  formData: any,
  formValueSchema: any,
  formValueDefault: any,
  apiHandler: any,
  apiCall: any
}

const ProjectSectionCreateComponent = (props: ProjectSectionCreateComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* ProjectSectionCreateComponent */}
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

export default ProjectSectionCreateComponent;

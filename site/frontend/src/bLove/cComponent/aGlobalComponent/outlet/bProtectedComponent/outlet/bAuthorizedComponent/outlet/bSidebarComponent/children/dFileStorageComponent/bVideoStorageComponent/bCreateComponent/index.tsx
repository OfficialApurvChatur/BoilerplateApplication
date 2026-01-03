import React from "react"

import TypicalCreateComponent from "../../../../component/bTypicalCreateComponent";


type VideoStorageCreateComponentType = {
  formHeader: any,
  formData: any,
  formValueSchema: any,
  formValueDefault: any,
  apiHandler: any,
  apiCall: any
}

const VideoStorageCreateComponent = (props: VideoStorageCreateComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* VideoStorageCreateComponent */}
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

export default VideoStorageCreateComponent;

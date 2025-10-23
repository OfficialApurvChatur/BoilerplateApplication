import React from "react"

import TypicalCreateComponent from "../../../../component/bTypicalCreateComponent";


type MessageCreateComponentType = {
  formHeader: any,
  formData: any,
  formValueSchema: any,
  formValueDefault: any,
  apiHandler: any,
  apiCall: any
}

const MessageCreateComponent = (props: MessageCreateComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* MessageCreateComponent */}
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

export default MessageCreateComponent;

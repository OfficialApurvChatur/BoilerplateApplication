import React from "react"

import TypicalCreateComponent from "../../../../component/bTypicalCreateComponent";


type ChatCreateComponentType = {
  formHeader: any,
  formData: any,
  formValueSchema: any,
  formValueDefault: any,
  apiHandler: any,
  apiCall: any
}

const ChatCreateComponent = (props: ChatCreateComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* ChatCreateComponent */}
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

export default ChatCreateComponent;

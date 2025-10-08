import React from "react"

import TypicalCreateComponent from "../../../../component/bTypicalCreateComponent";


type ContactFormCreateComponentType = {
  formHeader: any,
  formData: any,
  formValueSchema: any,
  formValueDefault: any,
  apiHandler: any,
  apiCall: any
}

const ContactFormCreateComponent = (props: ContactFormCreateComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* ContactFormCreateComponent */}
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

export default ContactFormCreateComponent;

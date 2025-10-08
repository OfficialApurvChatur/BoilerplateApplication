import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type ContactFormRetrieveComponentType = {
  pageHeader: any,
  pageData: any,
  apiCall: any
}

const ContactFormRetrieveComponent = (props: ContactFormRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* ContactFormRetrieveComponent */}
      <TypicalRetrieveComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default ContactFormRetrieveComponent;

import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type ContactInfoRetrieveComponentType = {
  pageHeader: any,
  pageData: any,
  apiCall: any
}

const ContactInfoRetrieveComponent = (props: ContactInfoRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* ContactInfoRetrieveComponent */}
      <TypicalRetrieveComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default ContactInfoRetrieveComponent;

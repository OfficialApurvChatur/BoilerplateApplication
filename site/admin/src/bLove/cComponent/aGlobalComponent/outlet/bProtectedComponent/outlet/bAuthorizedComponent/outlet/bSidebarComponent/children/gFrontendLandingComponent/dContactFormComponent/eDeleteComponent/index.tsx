import React from "react"

import TypicalDeleteComponent from "../../../../component/eTypicalDeleteComponent"


type ContactFormDeleteComponentType = {
  pageHeader: any,
  pageData: any,
  apiHandler: any
  apiCall: any
}

const ContactFormDeleteComponent = (props: ContactFormDeleteComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* ContactFormDeleteComponent */}
      <TypicalDeleteComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiHandler={props.apiHandler}
        apiCall= {props.apiCall}
      />
    </React.Fragment>
  )
}

export default ContactFormDeleteComponent;

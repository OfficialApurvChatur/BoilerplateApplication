import React from "react"

import TypicalDeleteComponent from "../../../../component/eTypicalDeleteComponent"


type ContactInfoDeleteComponentType = {
  pageHeader: any,
  pageData: any,
  apiHandler: any
  apiCall: any
}

const ContactInfoDeleteComponent = (props: ContactInfoDeleteComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* ContactInfoDeleteComponent */}
      <TypicalDeleteComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiHandler={props.apiHandler}
        apiCall= {props.apiCall}
      />
    </React.Fragment>
  )
}

export default ContactInfoDeleteComponent;

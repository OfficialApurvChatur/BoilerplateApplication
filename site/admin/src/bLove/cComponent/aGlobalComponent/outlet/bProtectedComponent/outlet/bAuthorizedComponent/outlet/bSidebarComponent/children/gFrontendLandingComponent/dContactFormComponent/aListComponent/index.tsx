import React from "react"

import TypicalListComponent from "../../../../component/aTypicalListComponent";


type ContactFormListComponentType = {
  listHeader: any,
  listColumn: any,
  listData: any,
  apiCall: any
}

const ContactFormListComponent = (props: ContactFormListComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* ContactFormListComponent */}
      <TypicalListComponent 
        listHeader={props.listHeader} 
        listColumn={props.listColumn} 
        listData={props.listData} 
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default ContactFormListComponent;

import React from "react"

import TypicalListComponent from "../../../../component/aTypicalListComponent";


type ContactInfoListComponentType = {
  listHeader: any,
  listColumn: any,
  listData: any,
  apiCall: any
}

const ContactInfoListComponent = (props: ContactInfoListComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* ContactInfoListComponent */}
      <TypicalListComponent 
        listHeader={props.listHeader} 
        listColumn={props.listColumn} 
        listData={props.listData} 
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default ContactInfoListComponent;

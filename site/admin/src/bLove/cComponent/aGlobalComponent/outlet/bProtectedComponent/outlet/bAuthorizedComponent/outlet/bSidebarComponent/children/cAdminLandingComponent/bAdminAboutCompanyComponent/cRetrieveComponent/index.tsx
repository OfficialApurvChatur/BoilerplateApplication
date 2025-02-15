import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type AdminAboutCompanyRetrieveComponentType = {
  header: { 
    title: string, 
    subtitle: string, 
    actions: { text: string, icon?: any, onClick: any }[], 
    links: { text: string, icon?: any, to: string }[] 
  },
  data: any,
  params: any,
  APICall: any
}

const AdminAboutCompanyRetrieveComponent = (props: AdminAboutCompanyRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AdminAboutCompanyRetrieveComponent */}
      <TypicalRetrieveComponent 
        header={props.header} 
        data={props.data}
        params= {props.params}
        APICall={props.APICall} 
      />
    </React.Fragment>
  )
}

export default AdminAboutCompanyRetrieveComponent;

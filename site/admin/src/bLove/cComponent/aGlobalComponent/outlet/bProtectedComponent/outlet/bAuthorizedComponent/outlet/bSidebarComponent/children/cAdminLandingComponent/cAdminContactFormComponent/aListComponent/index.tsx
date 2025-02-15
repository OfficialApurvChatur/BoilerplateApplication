import React from "react"

import TypicalListComponent from "../../../../component/aTypicalListComponent";


type AdminContactFormListComponentType = {
  header: { 
    title: string, 
    subtitle: string, 
    actions: { text: string, icon?: any, onClick: any }[], 
    links: { text: string, icon?: any, to: string }[] 
  },
  data: any,
  columns: any,
  APICall: any
}

const AdminContactFormListComponent = (props: AdminContactFormListComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AdminContactFormListComponent */}
      <TypicalListComponent 
        header={props.header} 
        data={props.data} 
        columns={props.columns} 
        APICall={props.APICall} 
      />
    </React.Fragment>
  )
}

export default AdminContactFormListComponent;

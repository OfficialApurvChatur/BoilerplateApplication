import React from "react"

import TypicalListComponent from "../../../../component/aTypicalListComponent";


type APILogListComponentType = {
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

const APILogListComponent = (props: APILogListComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* APILogListComponent */}
      <TypicalListComponent 
        header={props.header} 
        data={props.data} 
        columns={props.columns} 
        APICall={props.APICall} 
      />
    </React.Fragment>
  )
}

export default APILogListComponent;

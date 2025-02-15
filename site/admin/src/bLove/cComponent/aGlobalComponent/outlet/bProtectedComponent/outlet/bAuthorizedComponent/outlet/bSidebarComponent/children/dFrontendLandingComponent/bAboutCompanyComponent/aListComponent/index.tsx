import React from "react"

import TypicalListComponent from "../../../../component/aTypicalListComponent";


type AboutCompanyListComponentType = {
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

const AboutCompanyListComponent = (props: AboutCompanyListComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AboutCompanyListComponent */}
      <TypicalListComponent 
        header={props.header} 
        data={props.data} 
        columns={props.columns} 
        APICall={props.APICall} 
      />
    </React.Fragment>
  )
}

export default AboutCompanyListComponent;

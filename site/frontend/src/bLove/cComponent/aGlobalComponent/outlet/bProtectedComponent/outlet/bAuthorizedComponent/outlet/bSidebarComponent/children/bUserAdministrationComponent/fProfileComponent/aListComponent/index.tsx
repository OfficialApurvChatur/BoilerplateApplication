import React from "react"

import TypicalListComponent from "../../../../component/aTypicalListComponent";


type ProfileListComponentType = {
  listHeader: any,
  listColumn: any,
  listData: any,
  apiCall: any
}

const ProfileListComponent = (props: ProfileListComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* ProfileListComponent */}
      <TypicalListComponent 
        listHeader={props.listHeader} 
        listColumn={props.listColumn} 
        listData={props.listData} 
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default ProfileListComponent;

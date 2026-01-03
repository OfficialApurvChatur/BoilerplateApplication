import React from "react"

import TypicalListComponent from "../../../../component/aTypicalListComponent";


type MenuListComponentType = {
  listHeader: any,
  listColumn: any,
  listData: any,
  apiCall: any
}

const MenuListComponent = (props: MenuListComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* MenuListComponent */}
      <TypicalListComponent 
        listHeader={props.listHeader} 
        listColumn={props.listColumn} 
        listData={props.listData} 
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default MenuListComponent;

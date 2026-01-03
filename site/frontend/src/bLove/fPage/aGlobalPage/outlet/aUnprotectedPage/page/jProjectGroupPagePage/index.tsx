import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import ProjectGroupPageComponent from "@/bLove/cComponent/aGlobalComponent/outlet/aUnprotectedComponent/children/jProjectGroupPageComponent";


const ProjectGroupPagePage = () => {  
  // Redux Call
  const reduxCall = {
    state: useSelector((state: RootState) => state.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }

  // JSX
  return (
    <React.Fragment>
      {/* ProjectGroupPagePage */}
      <ProjectGroupPageComponent
        reduxCall={reduxCall}
      />
    </React.Fragment>
  )
}

export default ProjectGroupPagePage;

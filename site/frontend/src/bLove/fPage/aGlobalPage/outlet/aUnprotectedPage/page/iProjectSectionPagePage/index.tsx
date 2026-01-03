import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import projectSectionPageAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/aUnprotectedAPI/iProjectSectionPageAPI";

import ProjectSectionPageComponent from "@/bLove/cComponent/aGlobalComponent/outlet/aUnprotectedComponent/children/iProjectSectionPageComponent";


const ProjectSectionPagePage = () => {  
  // Variable
  const retrieveAPIResponse = projectSectionPageAPIEndpoint.useProjectSectionPageRetrieveAPIQuery(null);

  // Redux Call
  const reduxCall = {
    state: useSelector((state: RootState) => state.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }

  // API Call
  const apiCall = {
    retrieveAPIResponse,
  }  

  // JSX
  return (
    <React.Fragment>
      {/* ProjectSectionPagePage */}
      <ProjectSectionPageComponent
        reduxCall={reduxCall}
        apiCall={apiCall}
      />
    </React.Fragment>
  )
}

export default ProjectSectionPagePage;

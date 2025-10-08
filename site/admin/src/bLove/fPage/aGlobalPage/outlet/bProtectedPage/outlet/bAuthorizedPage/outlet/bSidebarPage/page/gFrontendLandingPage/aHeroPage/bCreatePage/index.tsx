import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import heroAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/bSidebarAPI/gFrontendLandingAPI/aHeroAPI";

import HeroCreateComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/bSidebarComponent/children/gFrontendLandingComponent/aHeroComponent/bCreateComponent";

import formHeader from "./extra/aFormHeader";
import formData from "./extra/bFormData";
import formValueSchema from "./extra/cFormValueSchema";
import formValueDefault from "./extra/dFormValueDefault";
import apiHandler from "./extra/eAPIHandler";

import isAllowedUtility, { isAllowedConstant } from "@/bLove/dUtility/bIsAllowdUtility";
import UnauthorizedAccessComponent from "@/bLove/cComponent/aGlobalComponent/component/dUnauthorizedAccessComponent";


const HeroCreatePage = () => {
  // Variable
  const navigate = useNavigate();
  const [ createAPITrigger, createAPIResponse ] = heroAPIEndpoint.useHeroCreateAPIMutation();
  
  // Redux Call
  const reduxCall = {
    state: useSelector((state: RootState) => state.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }

  // API Call
  const apiCall = {
    createAPITrigger,
    createAPIResponse,
  }

  // JSX
  return (!isAllowedUtility(reduxCall, isAllowedConstant.hero, "Create") ? <UnauthorizedAccessComponent /> :
    <React.Fragment>
      {/* HeroCreatePage */}
      <HeroCreateComponent 
        formHeader={formHeader()} 
        formData={formData()} 
        formValueSchema={formValueSchema} 
        formValueDefault={formValueDefault}
        apiHandler={apiHandler.createAPIHandler(apiCall.createAPITrigger)(navigate)} 
        apiCall={apiCall}
      />
    </React.Fragment>
  )
}

export default HeroCreatePage;

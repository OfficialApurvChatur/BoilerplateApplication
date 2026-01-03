import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import adminProjectGroupAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/bSidebarAPI/fAdminLandingAPI/lAdminProjectGroupAPI";
import adminProjectAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/bSidebarAPI/fAdminLandingAPI/mAdminProjectAPI";

import AdminProjectGroupCreateComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/bSidebarComponent/children/fAdminLandingComponent/lAdminProjectGroupComponent/bCreateComponent";

import formHeader from "./extra/aFormHeader";
import formData from "./extra/bFormData";
import formValueSchema from "./extra/cFormValueSchema";
import formValueDefault from "./extra/dFormValueDefault";
import apiHandler from "./extra/eAPIHandler";

import isAllowedUtility, { isAllowedConstant } from "@/bLove/dUtility/bIsAllowdUtility";
import UnauthorizedAccessComponent from "@/bLove/cComponent/aGlobalComponent/component/dUnauthorizedAccessComponent";


const AdminProjectGroupCreatePage = () => {
  // Variable
  const navigate = useNavigate();
  const [ createAPITrigger, createAPIResponse ] = adminProjectGroupAPIEndpoint.useAdminProjectGroupCreateAPIMutation();
  const adminProjectListAPIResponse = adminProjectAPIEndpoint.useAdminProjectListMiniAPIQuery(null);

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
    adminProjectListAPIResponse,
  }

  // JSX
  return (!isAllowedUtility(reduxCall, isAllowedConstant.adminProjectGroup, "Create") ? <UnauthorizedAccessComponent /> :
    <React.Fragment>
      {/* AdminProjectGroupCreatePage */}
      <AdminProjectGroupCreateComponent 
        formHeader={formHeader()} 
        formData={formData({ apiCall: apiCall })} 
        formValueSchema={formValueSchema} 
        formValueDefault={formValueDefault}
        apiHandler={apiHandler.createAPIHandler(apiCall.createAPITrigger)(navigate)} 
        apiCall={apiCall}
      />
    </React.Fragment>
  )
}

export default AdminProjectGroupCreatePage;

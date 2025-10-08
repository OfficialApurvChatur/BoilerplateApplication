import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import permissionAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/bSidebarAPI/bUserAdministrationAPI/cPermissionAPI";
import menuAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/bSidebarAPI/bUserAdministrationAPI/bMenuAPI";
import accountAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/aTopbarAPI/aAccountAPI";

import PermissionCreateComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/bSidebarComponent/children/bUserAdministrationComponent/cPermissionComponent/bCreateComponent";

import formHeader from "./extra/aFormHeader";
import formData from "./extra/bFormData";
import formValueSchema from "./extra/cFormValueSchema";
import formValueDefault from "./extra/dFormValueDefault";
import apiHandler from "./extra/eAPIHandler";

import isAllowedUtility, { isAllowedConstant } from "@/bLove/dUtility/bIsAllowdUtility";
import UnauthorizedAccessComponent from "@/bLove/cComponent/aGlobalComponent/component/dUnauthorizedAccessComponent";


const PermissionCreatePage = () => {
  // Variable
  const navigate = useNavigate();
  const [ createAPITrigger, createAPIResponse ] = permissionAPIEndpoint.usePermissionCreateAPIMutation();
  const menuListAPIResponse = menuAPIEndpoint.useMenuListMiniAPIQuery(null);
  const [ accountRetrievePrimaryAPITrigger, accountRetrievePrimaryAPIResponse ] = accountAPIEndpoint.useLazyAccountRetrievePrimaryAPIQuery();

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
    menuListAPIResponse,
    accountRetrievePrimaryAPITrigger,
    accountRetrievePrimaryAPIResponse,
  }

  // JSX
  return (!isAllowedUtility(reduxCall, isAllowedConstant.permission, "Create") ? <UnauthorizedAccessComponent /> :
    <React.Fragment>
      {/* PermissionCreatePage */}
      <PermissionCreateComponent 
        formHeader={formHeader()} 
        formData={formData({ apiCall: apiCall })} 
        formValueSchema={formValueSchema} 
        formValueDefault={formValueDefault}
        apiHandler={apiHandler.createAPIHandler(apiCall.createAPITrigger)(reduxCall)(navigate)(apiCall.accountRetrievePrimaryAPITrigger)} 
        apiCall={apiCall}
      />
    </React.Fragment>
  )
}

export default PermissionCreatePage;

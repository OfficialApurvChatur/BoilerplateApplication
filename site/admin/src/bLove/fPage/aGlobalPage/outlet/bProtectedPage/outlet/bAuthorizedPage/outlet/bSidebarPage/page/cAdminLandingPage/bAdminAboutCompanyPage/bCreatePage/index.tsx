import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import adminAboutCompanyAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/bSidebarAPI/cAdminLandingAPI/bAdminAboutCompanyAPI";

import AdminAboutCompanyCreateComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/bSidebarComponent/children/cAdminLandingComponent/bAdminAboutCompanyComponent/bCreateComponent";

import header from "./extra/eHeader";
import data from "./extra/fData";
import formSchema from "./extra/cFormSchema";
import formDefaultValue from "./extra/dFormDefaultValue";
import submitHandler from "./extra/bSubmitHandler";

import isAllowedUtility, { isAllowedConstant } from "@/bLove/dUtility/bIsAllowdUtility";
import UnauthorizedAccessComponent from "@/bLove/cComponent/aGlobalComponent/component/dUnauthorizedAccessComponent";


const AdminAboutCompanyCreatePage = () => {
  // Variable
  const [ createAPITrigger, createAPIResponse ] = adminAboutCompanyAPIEndpoint.useAdminAboutCompanyCreateAPIMutation();
  
  // Redux Call
  const ReduxCall = {
    state: useSelector((state: RootState) => state.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }

  // API Call
  const APICall = {
    createAPITrigger,
    createAPIResponse,
  }

  // JSX
  return (!isAllowedUtility(ReduxCall, isAllowedConstant.adminAboutCompany, "Create") ? <UnauthorizedAccessComponent /> :
    <React.Fragment>
      {/* AdminAboutCompanyCreatePage */}
      <AdminAboutCompanyCreateComponent 
        header={header()} 
        data={data()} 
        formSchema={formSchema} 
        formDefaultValue={formDefaultValue}
        APICall={APICall}
        submitHandler={submitHandler} 
      />
    </React.Fragment>
  )
}

export default AdminAboutCompanyCreatePage;

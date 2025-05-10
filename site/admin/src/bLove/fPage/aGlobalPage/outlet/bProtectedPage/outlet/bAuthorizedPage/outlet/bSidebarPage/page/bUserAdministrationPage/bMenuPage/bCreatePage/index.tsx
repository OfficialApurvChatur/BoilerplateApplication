import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import menuAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/bSidebarAPI/bUserAdministrationAPI/bMenuAPI";
import accessPointAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/bSidebarAPI/bUserAdministrationAPI/aAccessPointAPI";
import userAccountAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/aTopbarAPI/aUserAccountAPI";

import MenuCreateComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/bSidebarComponent/children/bUserAdministrationComponent/bMenuComponent/bCreateComponent";

import header from "./extra/eHeader";
import data from "./extra/fData";
import formSchema from "./extra/cFormSchema";
import formDefaultValue from "./extra/dFormDefaultValue";
import submitHandler from "./extra/bSubmitHandler";

import isAllowedUtility, { isAllowedConstant } from "@/bLove/dUtility/bIsAllowdUtility";
import UnauthorizedAccessComponent from "@/bLove/cComponent/aGlobalComponent/component/dUnauthorizedAccessComponent";


const MenuCreatePage = () => {
  // Variable
  const [ createAPITrigger, createAPIResponse ] = menuAPIEndpoint.useMenuCreateAPIMutation();
  const accessPointListAPIResponse = accessPointAPIEndpoint.useAccessPointListForMenuCreateAndUpdateAPIQuery(null);
  const [ userAccountRetrieveAPITrigger, userAccountRetrieveAPIResponse ] = userAccountAPIEndpoint.useLazyUserAccountRetrieveAPIQuery();

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
    accessPointListAPIResponse,
    userAccountRetrieveAPITrigger,
    userAccountRetrieveAPIResponse,
  }

  // JSX
  return (!isAllowedUtility(ReduxCall, isAllowedConstant.menu, "Create") ? <UnauthorizedAccessComponent /> :
    <React.Fragment>
      {/* MenuCreatePage */}
      <MenuCreateComponent 
        header={header()} 
        data={data({ APICall: APICall })} 
        formSchema={formSchema} 
        formDefaultValue={formDefaultValue}
        ReduxCall={ReduxCall}
        APICall={APICall}
        submitHandler={submitHandler} 
      />
    </React.Fragment>
  )
}

export default MenuCreatePage;

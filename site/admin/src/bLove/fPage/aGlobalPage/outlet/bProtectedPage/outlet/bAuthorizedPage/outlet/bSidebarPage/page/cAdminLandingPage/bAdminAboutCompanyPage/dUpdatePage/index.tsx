import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import adminAboutCompanyAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/bSidebarAPI/cAdminLandingAPI/bAdminAboutCompanyAPI";

import AdminAboutCompanyUpdateComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/bSidebarComponent/children/cAdminLandingComponent/bAdminAboutCompanyComponent/dUpdateComponent";

import apiResponseHandler from "./extra/aAPIResponseHandler";
import formSchema from "./extra/cFormSchema";
import submitHandler from "./extra/bSubmitHandler";
import header from "./extra/fHeader";
import data from "./extra/gData";
import formDefaultValue from "./extra/dFormDefaultValue";
import previousValue from "./extra/ePreviousValue";

import { useSocketEventHook } from "@/bLove/iHook/aSocketEventHook";
import { useSocket } from "@/aConnection/fSocketConnection";

import isAllowedUtility, { isAllowedConstant } from "@/bLove/dUtility/bIsAllowdUtility";
import UnauthorizedAccessComponent from "@/bLove/cComponent/aGlobalComponent/component/dUnauthorizedAccessComponent";


const AdminAboutCompanyUpdatePage = () => {
  // Variable
  const { id } = useParams();
  const socket = useSocket();
  const retrieveAPIResponse = adminAboutCompanyAPIEndpoint.useAdminAboutCompanyRetrieveAPIQuery({ params: { _id: id } });
  const [ updateAPITrigger, updateAPIResponse ] = adminAboutCompanyAPIEndpoint.useAdminAboutCompanyUpdateAPIMutation();

  // Redux Call
  const ReduxCall = {
    state: useSelector((state: RootState) => state.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }
  
  // API Call
  const APICall = {
    retrieveAPIResponse,
    updateAPITrigger,
    updateAPIResponse
  }

  // Listening Socket Events
  useSocketEventHook(socket, {
    [`ADMINABOUTCOMPANY_RETRIEVED:${id}`]: () => APICall.retrieveAPIResponse.refetch()
  })  

  // All Render
  // 1. Success Render
  useEffect(() => {
    apiResponseHandler.retrieveAPIResponseHandler(APICall.retrieveAPIResponse)
  }, [APICall.retrieveAPIResponse])
  
  // JSX
  return (!isAllowedUtility(ReduxCall, isAllowedConstant.adminAboutCompany, "Update") ? <UnauthorizedAccessComponent /> :
    <React.Fragment>
      {/* AdminAboutCompanyUpdatePage */}
      <AdminAboutCompanyUpdateComponent 
        header={header({ id: (id as string), retrieveAPIResponse: APICall.retrieveAPIResponse })} 
        data={data({ retrieveAPIResponse: APICall.retrieveAPIResponse })} 
        formSchema={formSchema} 
        formDefaultValue={formDefaultValue}
        previousValue={previousValue}
        params={{ id: id }}
        APICall={APICall}
        submitHandler={submitHandler} 
      />
    </React.Fragment>
  )
}

export default AdminAboutCompanyUpdatePage;

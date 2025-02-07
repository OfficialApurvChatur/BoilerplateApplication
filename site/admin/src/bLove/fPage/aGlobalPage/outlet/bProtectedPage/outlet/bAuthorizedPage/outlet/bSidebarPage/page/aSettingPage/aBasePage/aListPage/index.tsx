import React, { useEffect } from "react";
import { z } from "zod";

import baseAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/bSidebarAPI/aSettingAPI/aBaseAPI";

import BaseListComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/bSidebarComponent/children/aSettingComponent/cBaseComponent/aListComponent";

import apiResponseHandler from "./extra/aAPIResponseHandler";
import header from "./extra/cHeader";
import listSchema from "./extra/bSchema";
import columns from "./extra/dColumns";

import { useSocketEventHook } from "@/bLove/iHook/aSocketEventHook";
import { useSocket } from "@/aConnection/fSocketConnection";


const BaseListPage = () => {
  // Variable
	const socket = useSocket();
  const listAPIResponse = baseAPIEndpoint.useBaseListAPIQuery(null);

  // API Call
  const APICall = {
    listAPIResponse
  }
  
  // Listening Socket Events
  useSocketEventHook(socket, {
    BASE_LISTED: () => APICall.listAPIResponse.refetch()
  })

  // All Render
  // 1. Success Render
  useEffect(() => {
    apiResponseHandler.listAPIResponseHandler(APICall.listAPIResponse)
  }, [APICall.listAPIResponse])

  // JSX
  return (
    <React.Fragment>
      {/* BaseListPage */}
      <BaseListComponent 
        header={header({ listAPIResponse: APICall.listAPIResponse })} 
        data={z.array(listSchema).parse(APICall.listAPIResponse?.data?.list || [])} 
        columns={columns} 
        APICall={APICall}
      />
    </React.Fragment>
  )
}

export default BaseListPage;

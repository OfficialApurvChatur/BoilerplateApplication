import React, { useEffect } from "react";
import { z } from "zod";

import policyAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/bSidebarAPI/cMainAPI/aPolicyAPI";

import PolicyListComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/bSidebarComponent/children/cMainComponent/aPolicyComponent/aListComponent";

import { listSchema } from "./extra/schema";
import { columns } from "./extra/columns";
import { header } from "./extra/header";
import apiResponseHandler from "./extra/aAPIResponseHandler";


const PolicyListPage = () => {
  // Variable
  const listAPIResponse = policyAPIEndpoint.usePolicyListAPIQuery(null);

  // API Call
  const APICall = {
    listAPIResponse
  }

  // All Render
  // 1. Success Render
  useEffect(() => {
    apiResponseHandler.listAPIResponseHandler(APICall.listAPIResponse)
  }, [APICall.listAPIResponse])

  // JSX
  return (
    <React.Fragment>
      {/* PolicyListPage */}
      <PolicyListComponent 
        header={header({ listAPIResponse: APICall.listAPIResponse })} 
        data={z.array(listSchema).parse(APICall.listAPIResponse?.data?.list || [])} 
        columns={columns} 
        APICall={APICall}
      />
    </React.Fragment>
  )
}

export default PolicyListPage;

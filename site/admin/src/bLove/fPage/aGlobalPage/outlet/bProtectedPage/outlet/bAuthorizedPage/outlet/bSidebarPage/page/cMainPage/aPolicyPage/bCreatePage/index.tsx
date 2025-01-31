import React from "react";

import PolicyCreateComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/bSidebarComponent/children/cMainComponent/aPolicyComponent/bCreateComponent";

import policyAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/bSidebarAPI/cMainAPI/aPolicyAPI";

import header from "./extra/eHeader";
import data from "./extra/fData";
import formSchema from "./extra/cFormSchema";
import formDefaultValue from "./extra/dFormDefaultValue";
import submitHandler from "./extra/bSubmitHandler";


const PolicyCreatePage = () => {
  // Variable
  const [ policyCreateAPITrigger ] = policyAPIEndpoint.usePolicyCreateAPIMutation();
  
  // API Call
  const APICall = {
    createAPITrigger: policyCreateAPITrigger
  }

  // JSX
  return (
    <React.Fragment>
      {/* PolicyCreatePage */}
      <PolicyCreateComponent 
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

export default PolicyCreatePage;

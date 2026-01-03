import React from "react"
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "@/aConnection/dReduxConnection";

// import globalSlice from "@/bLove/bRedux/aGlobalSlice";

// import userAccountAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/aTopbarAPI/aAccountAPI";

// import AccountEmailUpdateComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/aTopbarComponent/children/cAccountEmailUpdatePrimaryComponent";

// import apiResponseHandler from "./extra/aAPIResponseHandler";
// import formSchema from "./extra/cFormSchema";
// import formDefaultValue from "./extra/dFormDefaultValue";
// import submitHandler from "./extra/bSubmitHandler";
// import previousValue from "./extra/ePreviousValue";


const AccountEmailUpdatePrimaryPage = () => {
  // Variable
  // const retrieveAPIResponse = userAccountAPIEndpoint.useUserAccountRetrieveAPIQuery(null);
  // const [ updateAPITrigger, updateAPIResponse ] = userAccountAPIEndpoint.useUserAccountEmailUpdateAPIMutation();
  // const [ userAccountRetrieveAPITrigger, userAccountRetrieveAPIResponse ] = userAccountAPIEndpoint.useLazyUserAccountRetrieveAPIQuery();

  // Redux Call
  // const reduxCall = {
  //   state: useSelector((state: RootState) => state.globalSlice),
  //   dispatch: useDispatch(),
  //   action: globalSlice.actions
  // }
  
  // API Call
  // const apiCall = {
  //   retrieveAPIResponse,
  //   updateAPITrigger,
  //   updateAPIResponse,
  //   userAccountRetrieveAPITrigger,
  //   userAccountRetrieveAPIResponse,
  // }

  // All Render
  // 1. Success Render
  // useEffect(() => {
  //   apiResponseHandler.retrieveAPIResponseHandler(apiCall.retrieveAPIResponse)
  // }, [apiCall.retrieveAPIResponse])
  
  // JSX
  return (
    <React.Fragment>
      AccountEmailUpdatePrimaryPage
      {/* <AccountEmailUpdateComponent
        formSchema={formSchema} 
        formDefaultValue={formDefaultValue}
        previousValue={previousValue}
        reduxCall={reduxCall}
        apiCall={apiCall}
        submitHandler={submitHandler} 
      /> */}
    </React.Fragment>
  )
}

export default AccountEmailUpdatePrimaryPage;

import { NavigateFunction } from "react-router-dom";

import apiResponseHandler from "./aAPIResponseHandler";


const submitHandler = (APICall: any, navigate: NavigateFunction, params: any, ReduxCall: any) => {
  apiResponseHandler.deleteAPIResponseHandler(APICall.deleteAPITrigger, ReduxCall, navigate, params, APICall.userAccountRetrieveAPITrigger)
}

export default submitHandler;

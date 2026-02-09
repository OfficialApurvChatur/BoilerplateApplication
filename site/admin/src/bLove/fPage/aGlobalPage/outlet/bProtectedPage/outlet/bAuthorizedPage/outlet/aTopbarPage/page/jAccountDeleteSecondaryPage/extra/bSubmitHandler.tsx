import { NavigateFunction } from "react-router-dom";

import apiResponseHandler from "./aAPIResponseHandler";
// import formSchema from "./cFormSchema";


const submitHandler = (reduxCall: any, apiCall: any, navigate: NavigateFunction) => {
  apiResponseHandler.deleteAPIResponseHandler(reduxCall, apiCall.deleteAPITrigger, navigate)
}

export default submitHandler;

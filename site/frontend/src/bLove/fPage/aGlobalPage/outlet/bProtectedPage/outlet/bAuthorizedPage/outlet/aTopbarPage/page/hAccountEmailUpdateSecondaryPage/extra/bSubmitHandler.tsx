import { z } from "zod";
import { NavigateFunction } from "react-router-dom";

import apiResponseHandler from "./aAPIResponseHandler";
import formSchema from "./cFormSchema";


const submitHandler = (data: z.infer<typeof formSchema>, form: any, reduxCall: any, apiCall: any, navigate: NavigateFunction) => {
  apiResponseHandler.updateAPIResponseHandler(data, reduxCall, apiCall.updateAPITrigger, form, navigate, apiCall.userAccountRetrieveAPITrigger)
}

export default submitHandler;

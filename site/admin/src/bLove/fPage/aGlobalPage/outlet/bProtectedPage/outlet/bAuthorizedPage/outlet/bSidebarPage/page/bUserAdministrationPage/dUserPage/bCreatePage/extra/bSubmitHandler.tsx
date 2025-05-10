import { z } from "zod";
import { NavigateFunction } from "react-router-dom";

import apiResponseHandler from "./aAPIResponseHandler";
import formSchema from "./cFormSchema";


const submitHandler = (data: z.infer<typeof formSchema>, form: any, APICall: any, navigate: NavigateFunction, ReduxCall: any) => {
  apiResponseHandler.createAPIResponseHandler(data, ReduxCall, APICall.createAPITrigger, form, navigate, APICall.userAccountRetrieveAPITrigger)
}

export default submitHandler;

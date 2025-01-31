const previousValue = (form: any, APICall: any) => (
  form.setValue("aTitle", APICall.retrieveAPIResponse.data.retrieve?.aTitle),

  form.setValue("cAccessPoint", APICall.retrieveAPIResponse.data.retrieve?.cAccessPoint?.map((each: any) => each._id))
)

export default previousValue;

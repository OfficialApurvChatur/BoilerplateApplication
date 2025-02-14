const previousValue = (form: any, APICall: any) => (
  form.setValue("aImage", APICall.retrieveAPIResponse.data.retrieve?.aImage),
  form.setValue("aTitle", APICall.retrieveAPIResponse.data.retrieve?.aTitle),
  form.setValue("aSubtitle", APICall.retrieveAPIResponse.data.retrieve?.aSubtitle),
  form.setValue("aDescription", APICall.retrieveAPIResponse.data.retrieve?.aDescription),
  form.setValue("aDetail", APICall.retrieveAPIResponse.data.retrieve?.aDetail),
  form.setValue("aStatus", APICall.retrieveAPIResponse.data.retrieve?.aStatus ? "Active" : "Inactive"),
  form.setValue("aState", APICall.retrieveAPIResponse.data.retrieve?.aState).

  form.setValue("cAccessPoint", APICall.retrieveAPIResponse.data.retrieve?.cAccessPoint?.map((each: any) => each._id))
)

export default previousValue;

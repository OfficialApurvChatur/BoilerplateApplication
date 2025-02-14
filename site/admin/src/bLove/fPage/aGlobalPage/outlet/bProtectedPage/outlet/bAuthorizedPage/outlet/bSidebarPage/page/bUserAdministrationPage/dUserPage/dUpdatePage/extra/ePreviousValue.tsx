const previousValue = (form: any, APICall: any) => (
  form.setValue("aImage", APICall.retrieveAPIResponse.data.retrieve?.aImage),
  form.setValue("aTitle", APICall.retrieveAPIResponse.data.retrieve?.aTitle),
  form.setValue("aSubtitle", APICall.retrieveAPIResponse.data.retrieve?.aSubtitle),
  form.setValue("aDescription", APICall.retrieveAPIResponse.data.retrieve?.aDescription),
  form.setValue("aDetail", APICall.retrieveAPIResponse.data.retrieve?.aDetail),
  form.setValue("aStatus", APICall.retrieveAPIResponse.data.retrieve?.aStatus ? "Active" : "Inactive"),
  form.setValue("aState", APICall.retrieveAPIResponse.data.retrieve?.aState),

  form.setValue("cRole", APICall.retrieveAPIResponse.data.retrieve?.cRole),
  form.setValue("cProfile", APICall.retrieveAPIResponse.data.retrieve?.cProfile),
  
  form.setValue("eFirstname", APICall.retrieveAPIResponse.data.retrieve?.eFirstname),
  form.setValue("eLastname", APICall.retrieveAPIResponse.data.retrieve?.eLastname),
  form.setValue("eEmail", APICall.retrieveAPIResponse.data.retrieve?.eEmail),
  form.setValue("eMobile", APICall.retrieveAPIResponse.data.retrieve?.eMobile)
)

export default previousValue;

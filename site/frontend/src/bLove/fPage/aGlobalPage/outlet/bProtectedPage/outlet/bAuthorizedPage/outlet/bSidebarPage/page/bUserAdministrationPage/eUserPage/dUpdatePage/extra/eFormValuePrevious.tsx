const formValuePrevious = (apiCall: any) => (form: any) => (
  form.setValue("aImage", apiCall.retrieveAPIResponse.data.retrieve?.aImage),
  form.setValue("aTitle", apiCall.retrieveAPIResponse.data.retrieve?.aTitle),
  form.setValue("aSubtitle", apiCall.retrieveAPIResponse.data.retrieve?.aSubtitle),
  form.setValue("aDescription", apiCall.retrieveAPIResponse.data.retrieve?.aDescription),
  form.setValue("aDetail", apiCall.retrieveAPIResponse.data.retrieve?.aDetail),
  form.setValue("aStatus", apiCall.retrieveAPIResponse.data.retrieve?.aStatus ? "Active" : "Inactive"),
  form.setValue("aState", apiCall.retrieveAPIResponse.data.retrieve?.aState),

  form.setValue("cRole", apiCall.retrieveAPIResponse.data.retrieve?.cRole),
  form.setValue("cProfile", apiCall.retrieveAPIResponse.data.retrieve?.cProfile),
  
  form.setValue("eFirstname", apiCall.retrieveAPIResponse.data.retrieve?.eFirstname),
  form.setValue("eLastname", apiCall.retrieveAPIResponse.data.retrieve?.eLastname),
  form.setValue("eEmail", apiCall.retrieveAPIResponse.data.retrieve?.eEmail),
  form.setValue("eMobile", apiCall.retrieveAPIResponse.data.retrieve?.eMobile)
)

export default formValuePrevious;

const formValuePrevious = (apiCall: any) => (form: any) => (
  form.setValue("aImage", apiCall.retrieveAPIResponse.data.retrieve?.aImage),
  form.setValue("aTitle", apiCall.retrieveAPIResponse.data.retrieve?.aTitle),
  form.setValue("aSubtitle", apiCall.retrieveAPIResponse.data.retrieve?.aSubtitle),
  form.setValue("aDescription", apiCall.retrieveAPIResponse.data.retrieve?.aDescription),
  form.setValue("aDetail", apiCall.retrieveAPIResponse.data.retrieve?.aDetail),
  form.setValue("aStatus", apiCall.retrieveAPIResponse.data.retrieve?.aStatus ? "Active" : "Inactive"),
  form.setValue("aState", apiCall.retrieveAPIResponse.data.retrieve?.aState),

  form.setValue("cBranches", apiCall.retrieveAPIResponse.data.retrieve?.cBranches)
)

export default formValuePrevious;

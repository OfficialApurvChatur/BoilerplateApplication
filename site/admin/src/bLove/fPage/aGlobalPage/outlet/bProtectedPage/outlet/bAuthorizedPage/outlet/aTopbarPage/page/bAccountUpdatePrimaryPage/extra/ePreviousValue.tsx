const previousValue = (form: any, apiCall: any) => (
  form.setValue("aImage", apiCall.retrieveAPIResponse.data.user_account_retrieve?.aImage),
  form.setValue("aTitle", apiCall.retrieveAPIResponse.data.user_account_retrieve?.aTitle),

  form.setValue("eImage", apiCall.retrieveAPIResponse.data.user_account_retrieve?.eImage),
  form.setValue("eFirstname", apiCall.retrieveAPIResponse.data.user_account_retrieve?.eFirstname),
  form.setValue("eLastname", apiCall.retrieveAPIResponse.data.user_account_retrieve?.eLastname),
  form.setValue("eEmail", apiCall.retrieveAPIResponse.data.user_account_retrieve?.eEmail),
  form.setValue("eMobile", apiCall.retrieveAPIResponse.data.user_account_retrieve?.eMobile)
)

export default previousValue;

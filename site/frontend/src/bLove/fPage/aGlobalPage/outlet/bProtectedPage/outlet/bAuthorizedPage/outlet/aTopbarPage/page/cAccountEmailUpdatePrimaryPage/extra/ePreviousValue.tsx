const previousValue = (form: any, apiCall: any) => (
  form.setValue("eEmail", apiCall.retrieveAPIResponse.data.user_account_retrieve?.eEmail)
)

export default previousValue;

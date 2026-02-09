const previousValue = (form: any, apiCall: any) => (
  form.setValue("ePassword", apiCall.retrieveAPIResponse.data.user_account_retrieve?.ePassword),
  form.setValue("eNewPassword", apiCall.retrieveAPIResponse.data.user_account_retrieve?.eNewPassword),
  form.setValue("eConfirmPassword", apiCall.retrieveAPIResponse.data.user_account_retrieve?.eConfirmPassword)
)

export default previousValue;

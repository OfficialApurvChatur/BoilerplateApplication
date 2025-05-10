const previousValue = (form: any, APICall: any) => (
  form.setValue("eEmail", APICall.retrieveAPIResponse.data.user_account_retrieve?.eEmail)
)

export default previousValue;

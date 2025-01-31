const previousValue = (form: any, APICall: any) => (
  form.setValue("aTitle", APICall.retrieveAPIResponse.data.retrieve?.aTitle)
)

export default previousValue;

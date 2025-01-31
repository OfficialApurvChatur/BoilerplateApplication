const previousValue = (form: any, APICall: any) => (
  form.setValue("aTitle", APICall.retrieveAPIResponse.data.retrieve?.aTitle),

  form.setValue("cUser", APICall.retrieveAPIResponse.data.retrieve?.cUser)
)

export default previousValue;

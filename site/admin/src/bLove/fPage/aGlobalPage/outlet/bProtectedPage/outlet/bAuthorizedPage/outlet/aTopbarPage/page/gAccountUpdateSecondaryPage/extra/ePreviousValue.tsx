const previousValue = (form: any, apiCall: any) => (
  form.setValue("aImage", apiCall.retrieveAPIResponse.data.user_account_retrieve?.aImage),
  form.setValue("aTitle", apiCall.retrieveAPIResponse.data.user_account_retrieve?.aTitle),
  form.setValue("aSubtitle", apiCall.retrieveAPIResponse.data.user_account_retrieve?.aSubtitle),
  form.setValue("aDescription", apiCall.retrieveAPIResponse.data.user_account_retrieve?.aDescription),
  form.setValue("aDetail", apiCall.retrieveAPIResponse.data.user_account_retrieve?.aDetail),

  form.setValue("dAddress.aLane", apiCall.retrieveAPIResponse.data.user_account_retrieve?.dAddress?.aLane),
  form.setValue("dAddress.bStreet", apiCall.retrieveAPIResponse.data.user_account_retrieve?.dAddress?.bStreet),
  form.setValue("dAddress.cCity", apiCall.retrieveAPIResponse.data.user_account_retrieve?.dAddress?.cCity),
  form.setValue("dAddress.dState", apiCall.retrieveAPIResponse.data.user_account_retrieve?.dAddress?.dState),
  form.setValue("dAddress.eCountry", apiCall.retrieveAPIResponse.data.user_account_retrieve?.dAddress?.eCountry),
  form.setValue("dAddress.fPinCode", apiCall.retrieveAPIResponse.data.user_account_retrieve?.dAddress?.fPinCode),
  form.setValue("dLinks", apiCall.retrieveAPIResponse.data.user_account_retrieve?.dLinks),

  form.setValue("eImage", apiCall.retrieveAPIResponse.data.user_account_retrieve?.eImage),
  form.setValue("eFirstname", apiCall.retrieveAPIResponse.data.user_account_retrieve?.eFirstname),
  form.setValue("eLastname", apiCall.retrieveAPIResponse.data.user_account_retrieve?.eLastname),
  form.setValue("eEmail", apiCall.retrieveAPIResponse.data.user_account_retrieve?.eEmail),
  form.setValue("eMobile", apiCall.retrieveAPIResponse.data.user_account_retrieve?.eMobile)
)

export default previousValue;

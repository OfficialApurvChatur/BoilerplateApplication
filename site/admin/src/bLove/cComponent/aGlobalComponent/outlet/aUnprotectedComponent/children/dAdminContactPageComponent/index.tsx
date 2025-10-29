import React from 'react'

import LoaderComponent from '@/bLove/cComponent/aGlobalComponent/component/aLoaderComponent';
import ErrorComponent from '@/bLove/cComponent/aGlobalComponent/component/bErrorComponent';

// import { ContactFormComponent } from './component/aContactFormComponent';


type AdminContactPageComponentType = {
  reduxCall: any,
  apiCall: any,
}

export type AdminContactPageDataType = {
  aImage: string;
  aTitle: string;
  aSubtitle: string;
  aDescription: string;
  aDetail: string;
};

const AdminContactPageComponent = (props: AdminContactPageComponentType) => {
    // Destructure Props
  const { apiCall } = props;

  // Variables
  let apiResponse: AdminContactPageDataType | null = null;
  
  if (apiCall.retrieveAPIResponse?.isLoading || apiCall.retrieveAPIResponse?.isFetching) {
    return <LoaderComponent />;
  }

  if (apiCall.retrieveAPIResponse?.isError) {
    return <ErrorComponent message="Error..." />;
  }

  if (
    apiCall.retrieveAPIResponse?.isSuccess &&
    apiCall.retrieveAPIResponse?.data?.success
  ) {
    apiResponse = apiCall.retrieveAPIResponse.data.retrieve.contactInfo;  
  }
  
  // JSX
  return (
    <React.Fragment>
      {/* AdminContactPageComponent */}

      {
        (apiCall.retrieveAPIResponse.isLoading || apiCall.retrieveAPIResponse.isFetching) ? <LoaderComponent /> : 
        (apiCall.retrieveAPIResponse.isError) ? <ErrorComponent message="Error..." /> :
        (apiCall.retrieveAPIResponse.isSuccess) ? (
          (apiCall.retrieveAPIResponse.data.success) ? (
            <React.Fragment>

              <div className="py-8" >
                <p className="font-myPrimaryFont text-2xl" >
                  Contact Info
                </p>
                <p className="font-mySecondaryFont text-sm" >
                  Image: {apiResponse?.aImage}
                </p>
                <p className="font-mySecondaryFont text-sm" >
                  Title: {apiResponse?.aTitle}
                </p>
                <p className="font-mySecondaryFont text-sm" >
                  Subtitle: {apiResponse?.aSubtitle}
                </p>
                <p className="font-mySecondaryFont text-sm" >
                  Description: {apiResponse?.aDescription}
                </p>
                <p className="font-mySecondaryFont text-sm" >
                  Detail: {apiResponse?.aDetail}
                </p>
              </div>

              {/* <div className="overflow-hidden" >
                <ContactFormComponent />
              </div> */}
            </React.Fragment>
          ) : null
        ) : null
      }

    </React.Fragment>
  )
}

export default AdminContactPageComponent;

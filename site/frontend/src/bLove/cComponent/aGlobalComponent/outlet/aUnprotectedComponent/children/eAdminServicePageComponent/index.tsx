import React from 'react'

import LoaderComponent from '@/bLove/cComponent/aGlobalComponent/component/aLoaderComponent';
import ErrorComponent from '@/bLove/cComponent/aGlobalComponent/component/bErrorComponent';


type AdminServicePageComponentType = {
  reduxCall: any,
  apiCall: any,
}

export type ServiceComponentDataType = {
  aImage: string;
  aTitle: string;
  aSubtitle: string;
  aDescription: string;
  aDetail: string;
  dLinks: {
    aLinkTitle: 'Instagram' | 'Twitter' | 'Linkedin' | 'Portfolio' | 'Other';
    bLinkURL: string;
  }[];
  dIcon: {
    aIconLabel: string;
    bIconValue: string;
  };
};

const AdminServicePageComponent = (props: AdminServicePageComponentType) => {
  // Destructure Props
  const { apiCall } = props;

  // Variables
  let apiResponse: ServiceComponentDataType[] | null = null;
  
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
    apiResponse = apiCall.retrieveAPIResponse.data.retrieve.service;  
  }
  
  // JSX
  return (
    <React.Fragment>
      {/* AdminServicePageComponent */}

      {
        (apiCall.retrieveAPIResponse.isLoading || apiCall.retrieveAPIResponse.isFetching) ? <LoaderComponent /> : 
        (apiCall.retrieveAPIResponse.isError) ? <ErrorComponent message="Error..." /> :
        (apiCall.retrieveAPIResponse.isSuccess) ? (
          (apiCall.retrieveAPIResponse.data.success) ? (
            <React.Fragment>
              
              <div className="py-8" >
                <p className="font-myPrimaryFont text-2xl" >
                  Service Section
                </p>

                {apiResponse?.map((each, index) => (
                  <div className="px-4 py-4" key={index} >
                    <p className="font-mySecondaryFont text-sm" >
                      Image: {each.aImage}
                    </p>
                    <p className="font-mySecondaryFont text-sm" >
                      Title: {each.aTitle}
                    </p>
                    <p className="font-mySecondaryFont text-sm" >
                      Subtitle: {each.aSubtitle}
                    </p>
                    <p className="font-mySecondaryFont text-sm" >
                      Description: {each.aDescription}
                    </p>
                    <p className="font-mySecondaryFont text-sm" >
                      Detail: {each.aDetail}
                    </p>
                    <p className="font-mySecondaryFont text-sm" >
                      Links:
                      {each?.dLinks?.map((each, index) => (
                        <p className="px-4" >{`${index+1}) ${each?.aLinkTitle} (${each?.bLinkURL})`}</p>
                      ))}
                    </p>
                    <p className="font-mySecondaryFont text-sm" >
                      Icon:
                        <p className="px-4" >{`${1}) ${each?.dIcon?.aIconLabel} ${each?.dIcon?.bIconValue}`}</p>
                    </p>
                  </div>
                ))}
              </div>

              {/* <div className="overflow-hidden" >
              </div> */}
            </React.Fragment>
          ) : null
        ) : null
      }

    </React.Fragment>
  )
}

export default AdminServicePageComponent;

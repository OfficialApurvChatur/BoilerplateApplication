import React from 'react'

import LoaderComponent from '@/bLove/cComponent/aGlobalComponent/component/aLoaderComponent';
import ErrorComponent from '@/bLove/cComponent/aGlobalComponent/component/bErrorComponent';

import { AboutComponent } from './component/aAboutComponent';


type AdminAboutCompanyPageComponentType = {
  reduxCall: any,
  apiCall: any,
}

export type AboutCompanyComponentDataType = {
  truly: {
    aImage: string;
    aTitle: string;
    aSubtitle: string;
    aDescription: string;
    aDetail: string;
    dTag: string;
  };
  relatively: {
    aImage: string;
    aTitle: string;
    aSubtitle: string;
    aDescription: string;
    aDetail: string;
    dTag: string;
  };
};

const AdminAboutCompanyPageComponent = (props: AdminAboutCompanyPageComponentType) => {
  // Destructure Props
  const { apiCall } = props;

  // Variables
  let apiResponse: AboutCompanyComponentDataType | null = null;
  
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
    apiResponse = apiCall.retrieveAPIResponse.data.retrieve.aboutCompany;  
  }
  
  // JSX
  return (
    <React.Fragment>
      {/* AdminAboutCompanyPageComponent */}

      {
        (props.apiCall.retrieveAPIResponse.isLoading || props.apiCall.retrieveAPIResponse.isFetching) ? <LoaderComponent /> : 
        (props.apiCall.retrieveAPIResponse.isError) ? <ErrorComponent message="Error..." /> :
        (props.apiCall.retrieveAPIResponse.isSuccess) ? (
          (props.apiCall.retrieveAPIResponse.data.success) ? (
            <React.Fragment>
              
              <div className="py-8" >
                <p className="font-myPrimaryFont text-2xl" >
                  Truly About Company
                </p>
                <p className="font-mySecondaryFont text-sm" >
                  Image: {apiResponse?.truly?.aImage}
                </p>
                <p className="font-mySecondaryFont text-sm" >
                  Title: {apiResponse?.truly?.aTitle}
                </p>
                <p className="font-mySecondaryFont text-sm" >
                  Subtitle: {apiResponse?.truly?.aSubtitle}
                </p>
                <p className="font-mySecondaryFont text-sm" >
                  Description: {apiResponse?.truly?.aDescription}
                </p>
                <p className="font-mySecondaryFont text-sm" >
                  Detail: {apiResponse?.truly?.aDetail}
                </p>
                <p className="font-mySecondaryFont text-sm" >
                  Tag: {apiResponse?.truly?.dTag}
                </p>
              </div>

              <div className="py-8" >
                <p className="font-myPrimaryFont text-2xl" >
                  Relatively About Company
                </p>
                <p className="font-mySecondaryFont text-sm" >
                  Image: {apiResponse?.relatively?.aImage}
                </p>
                <p className="font-mySecondaryFont text-sm" >
                  Title: {apiResponse?.relatively?.aTitle}
                </p>
                <p className="font-mySecondaryFont text-sm" >
                  Subtitle: {apiResponse?.relatively?.aSubtitle}
                </p>
                <p className="font-mySecondaryFont text-sm" >
                  Description: {apiResponse?.relatively?.aDescription}
                </p>
                <p className="font-mySecondaryFont text-sm" >
                  Detail: {apiResponse?.relatively?.aDetail}
                </p>
                <p className="font-mySecondaryFont text-sm" >
                  Tag: {apiResponse?.relatively?.dTag}
                </p>
              </div>

              <div className="overflow-hidden" >
                <AboutComponent reduxCall={props.reduxCall} />
              </div>
            </React.Fragment>
          ) : []
        ) : []
      }

    </React.Fragment>
  )
}

export default AdminAboutCompanyPageComponent;

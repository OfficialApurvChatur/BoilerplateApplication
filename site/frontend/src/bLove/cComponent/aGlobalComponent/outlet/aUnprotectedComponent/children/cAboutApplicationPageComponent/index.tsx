import React from 'react'

import LoaderComponent from '@/bLove/cComponent/aGlobalComponent/component/aLoaderComponent';
import ErrorComponent from '@/bLove/cComponent/aGlobalComponent/component/bErrorComponent';

import { AboutApplicationComponent } from './component/aAboutApplicationComponent';


type AboutApplicationPageComponentType = {
  reduxCall: any,
  apiCall: any,
}

export type AboutApplicationComponentDataType = {
  aImage: string;
  aTitle: string;
  aSubtitle: string;
  aDescription: string;
  aDetail?: string;
  dTechIcon: {
    aIconLabel: string;
    bIconValue: string;
  }[];
}[];

const AboutApplicationPageComponent = (props: AboutApplicationPageComponentType) => {
  // Destructure Props
  const { apiCall } = props;

  // Variables
  let apiResponse: AboutApplicationComponentDataType | null = null;
  
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
    apiResponse = apiCall.retrieveAPIResponse.data.retrieve.aboutApplication;  
  }

  // JSX
  return (
    <React.Fragment>
      {/* AboutApplicationPageComponent */}

      {
        (props.apiCall.retrieveAPIResponse.isLoading || props.apiCall.retrieveAPIResponse.isFetching) ? <LoaderComponent /> : 
        (props.apiCall.retrieveAPIResponse.isError) ? <ErrorComponent message="Error..." /> :
        (props.apiCall.retrieveAPIResponse.isSuccess) ? (
          (props.apiCall.retrieveAPIResponse.data.success) ? (
            <React.Fragment>

              {/* <div className="py-8" >
                <p className="font-myPrimaryFont text-2xl" >
                  About Application
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
                  Tech Icon:
                  {apiResponse?.dTechIcon?.map((each, index) => (
                    <p className="px-4" >{`${index+1}) ${each?.aIconLabel} (${each?.bIconValue})`}</p>
                  ))}
                </p>
              </div> */}

              <div className="overflow-hidden" >
                <AboutApplicationComponent 
                  reduxCall={props.reduxCall} 
                  apiResponse={apiResponse as AboutApplicationComponentDataType} 
                />
              </div>
              
            </React.Fragment>
          ) : []
        ) : []
      }

    </React.Fragment>
  )
}

export default AboutApplicationPageComponent;

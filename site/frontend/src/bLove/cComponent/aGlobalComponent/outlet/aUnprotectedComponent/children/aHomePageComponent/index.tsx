import React from 'react'

import LoaderComponent from '@/bLove/cComponent/aGlobalComponent/component/aLoaderComponent';
import ErrorComponent from '@/bLove/cComponent/aGlobalComponent/component/bErrorComponent';

import { HeroComponent } from './component/aHeroComponent';


type HomePageComponentType = {
  ReduxCall: any,
  APICall: any,
}

const HomePageComponent = (props: HomePageComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* HomePageComponent */}

      {
        (props.APICall.listAPIResponse.isLoading || props.APICall.listAPIResponse.isFetching) ? <LoaderComponent /> : 
        (props.APICall.listAPIResponse.isError) ? <ErrorComponent message="Error..." /> :
        (props.APICall.listAPIResponse.isSuccess) ? (
          (props.APICall.listAPIResponse.data.success) ? (
            <React.Fragment>
              <div className="overflow-hidden" >
                <HeroComponent ReduxCall={props.ReduxCall} APICall={props.APICall} />
                {/* <GalleryComponent /> */}
                {/* <TechnologyComponent /> */}
                {/* <FeatureComponent /> */}
              </div>
            </React.Fragment>
          ) : []
        ) : []
      }

    </React.Fragment>
  )
}

export default HomePageComponent;

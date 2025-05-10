import React from 'react'

import LoaderComponent from '@/bLove/cComponent/aGlobalComponent/component/aLoaderComponent';
import ErrorComponent from '@/bLove/cComponent/aGlobalComponent/component/bErrorComponent';

import { HeroComponent } from './component/aHeroComponent';


type AdminHomePageComponentType = {
  ReduxCall: any,
  APICall: any,
}

const AdminHomePageComponent = (props: AdminHomePageComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AdminHomePageComponent */}

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
                {/* <SponsorComponent /> */}
                {/* <AboutComponent /> */}
                {/* <HowItWorkComponent /> */}
                {/* <FeatureComponent /> */}
                {/* <ServiceComponent /> */}
                {/* <CTAComponent /> */}
                {/* <TestimonialComponent /> */}
                {/* <TeamComponent /> */}
                {/* <PricingComponent /> */}
                {/* <NewsletterComponent /> */}
                {/* <FAQComponent /> */}
              </div>
            </React.Fragment>
          ) : []
        ) : []
      }

    </React.Fragment>
  )
}

export default AdminHomePageComponent;

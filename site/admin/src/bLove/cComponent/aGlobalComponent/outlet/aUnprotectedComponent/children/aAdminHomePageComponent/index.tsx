import React from 'react'

import LoaderComponent from '@/bLove/cComponent/aGlobalComponent/component/aLoaderComponent';
import ErrorComponent from '@/bLove/cComponent/aGlobalComponent/component/bErrorComponent';

import { HeroComponent } from './component/aHeroComponent';
import { GalleryComponent } from './component/nGalleryComponent';
import { TechnologyComponent } from './component/pTechnologyComponent';
import { FeatureComponent } from './component/fFeatureComponent';
import { SponsorComponent } from './component/cSponsorComponent';
import { AboutComponent } from './component/dAboutComponent';
import { HowItWorkComponent } from './component/eHowItWorkComponent';
import { ServiceComponent } from './component/gServiceComponent';
import { CTAComponent } from './component/hCTAComponent';
import { TestimonialComponent } from './component/iTestimonialComponent';
import { TeamComponent } from './component/jTeamComponent';
import { PricingComponent } from './component/kPricingComponent';
import { NewsletterComponent } from './component/lNewsletterComponent';
import { FAQComponent } from './component/mFAQComponent';


type AdminHomePageComponentType = {
  reduxCall: any,
  // apiCall: any,
}

const AdminHomePageComponent = (props: AdminHomePageComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AdminHomePageComponent */}

      {/* {
        (props.apiCall.listAPIResponse.isLoading || props.apiCall.listAPIResponse.isFetching) ? <LoaderComponent /> : 
        (props.apiCall.listAPIResponse.isError) ? <ErrorComponent message="Error..." /> :
        (props.apiCall.listAPIResponse.isSuccess) ? (
          (props.apiCall.listAPIResponse.data.success) ? ( */}
            <React.Fragment>
              <div className="overflow-hidden" >
                {/* <HeroCosmponent reduxCall={props.reduxCall} apiCall={props.apiCall} /> */}
                <GalleryComponent />
                <TechnologyComponent />
                <FeatureComponent />
                <SponsorComponent />
                <AboutComponent />
                <HowItWorkComponent />
                <FeatureComponent />
                <ServiceComponent />
                <CTAComponent />
                <TestimonialComponent />
                <TeamComponent />
                <PricingComponent />
                <NewsletterComponent />
                <FAQComponent />
              </div>
            </React.Fragment>
          {/* ) : []
        ) : []
      }
 */}
    </React.Fragment>
  )
}

export default AdminHomePageComponent;

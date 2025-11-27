import React from 'react'

import LoaderComponent from '@/bLove/cComponent/aGlobalComponent/component/aLoaderComponent';
import ErrorComponent from '@/bLove/cComponent/aGlobalComponent/component/bErrorComponent';

const HeroComponent = React.lazy(() => import("./component/aHeroComponent"));
const AboutCompanyComponent = React.lazy(() => import("./component/bAboutCompanyComponent"));
const AboutApplicationComponent = React.lazy(() => import("./component/cAboutApplicationComponent"));
const ServiceComponent = React.lazy(() => import("./component/dServiceComponent"));
const CounterComponent = React.lazy(() => import("./component/eCounterComponent"));
const BranchSectionComponent = React.lazy(() => import("./component/fBranchSectionComponent"));
const ProjectSectionComponent = React.lazy(() => import("./component/gProjectSectionComponent"));
const ContactInfoComponent = React.lazy(() => import("./component/hContactInfoComponent"));


type AdminHomePageComponentType = {
  reduxCall: any,
  apiCall: any,
}

export type HeroComponentDataType = {
  aImage: string;
  aTitle: string;
  aSubtitle: string;
  aDescription: string;
  dTag: string;
  dSocialLinks: {
    aLinkTitle: string;
    bLinkURL: string;
  }[];
  dWebLinks: {
    aLinkTitle: string;
    bLinkURL: string;
  }[];
  dGalleryImages: string[];
};

export type AboutCompanyComponentDataType = {
  aImage: string;
  aTitle: string;
  aSubtitle: string;
  aDescription: string;
  aDetail?: string;
  dTag: string;
};

export type AboutApplicationComponentDataType = {
  aImage: string;
  aTitle: string;
  aSubtitle: string;
  aDescription: string;
  dTechIcon: {
    aIconLabel: string;
    bIconValue: string;
  }[];
};

export type ServiceComponentDataType = {
  aImage: string;
  aTitle: string;
  aSubtitle: string;
  aDescription: string;
  dLinks: {
    aLinkTitle: 'Instagram' | 'Twitter' | 'Linkedin' | 'Portfolio' | 'Other';
    bLinkURL: string;
  }[];
  dIcon: {
    aIconLabel: string;
    bIconValue: string;
  };
};

export type CounterComponentDataType = {
  aImage: string;
  aTitle: string;
  aSubtitle: string;
  aDescription: string;
};

export type BranchComponentDataType = {
  aImage: string;
  aTitle: string;
  aSubtitle: string;
  aDescription: string;
  dSocialLinks: {
    aLinkTitle: string;
    bLinkURL: string;
  }[];
  dWebLinks: {
    aLinkTitle: string;
    bLinkURL: string;
  }[];
};

export type BranchGroupComponentDataType = {
  aImage: string;
  aTitle: string;
  aSubtitle: string;
  aDescription: string;
  cBranches: BranchComponentDataType[];
};

export type BranchSectionComponentDataType = {
  aImage: string;
  aTitle: string;
  aSubtitle: string;
  aDescription: string;
  aSlug: string;
  cBranchGroups: BranchGroupComponentDataType[];
};

export type ProjectComponentDataType = {
  aImage: string;
  aTitle: string;
  aSubtitle: string;
  aDescription: string;
  dSocialLinks: {
    aLinkTitle: string;
    bLinkURL: string;
  }[];
  dWebLinks: {
    aLinkTitle: string;
    bLinkURL: string;
  }[];
};

export type ProjectGroupComponentDataType = {
  aImage: string;
  aTitle: string;
  aSubtitle: string;
  aDescription: string;
  cProjects: ProjectComponentDataType[];
};

export type ProjectSectionComponentDataType = {
  aImage: string;
  aTitle: string;
  aSubtitle: string;
  aDescription: string;
  cProjectGroups: ProjectGroupComponentDataType[];
};

export type ContactInfoComponentDataType = {
  aImage: string;
  aTitle: string;
  aSubtitle: string;
  aDescription: string;
};

type AdminHomePageDataType = {
  hero: HeroComponentDataType;
  aboutCompany: {
    truly: AboutCompanyComponentDataType;
    relatively: AboutCompanyComponentDataType;
  };
  aboutApplication: AboutApplicationComponentDataType;
  service: ServiceComponentDataType[];
  counter: CounterComponentDataType[];
  projectSection: ProjectSectionComponentDataType;
  branchSection: BranchSectionComponentDataType;
  contactInfo: ContactInfoComponentDataType;
};

const AdminHomePageComponent = (props: AdminHomePageComponentType) => {
  // Destructure Props
  const { reduxCall, apiCall } = props;

  // Variables
  let apiResponse: AdminHomePageDataType | null = null;
  
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
    apiResponse = apiCall.retrieveAPIResponse.data.retrieve;  
  }
  
  // JSX
  return (
    <React.Fragment>
      {/* AdminHomePageComponent */}

      {
        (apiCall.retrieveAPIResponse.isLoading || apiCall.retrieveAPIResponse.isFetching) ? <LoaderComponent /> : 
        (apiCall.retrieveAPIResponse.isError) ? <ErrorComponent message="Error..." /> :
        (apiCall.retrieveAPIResponse.isSuccess) ? (
          (apiCall.retrieveAPIResponse.data.success) ? (
            <React.Fragment>
              <div className="overflow-hidden" >

                {apiCall.retrieveAPIResponse.data.retrieve.hero && (
                  <HeroComponent 
                    reduxCall={reduxCall}
                    apiResponse={apiResponse?.hero as HeroComponentDataType}
                  />
                )}
                
                {apiCall.retrieveAPIResponse.data.retrieve.aboutCompany && (
                  apiCall.retrieveAPIResponse.data.retrieve.aboutCompany.truly &&
                  apiCall.retrieveAPIResponse.data.retrieve.aboutCompany.relatively && (
                    <AboutCompanyComponent 
                      reduxCall={reduxCall}
                      apiResponse={{
                        truly: apiResponse?.aboutCompany?.truly as AboutCompanyComponentDataType,
                        relatively: apiResponse?.aboutCompany?.relatively as AboutCompanyComponentDataType,
                      }}
                    />
                  )
                )}
                
                {apiCall.retrieveAPIResponse.data.retrieve.aboutApplication && (
                  <AboutApplicationComponent 
                    reduxCall={reduxCall}
                    apiResponse={apiResponse?.aboutApplication as AboutApplicationComponentDataType}
                  />
                )}
                
                {apiCall.retrieveAPIResponse.data.retrieve.service?.length > 0 && (
                  <ServiceComponent 
                    reduxCall={reduxCall}
                    apiResponse={apiResponse?.service as ServiceComponentDataType[]}
                  />
                )}
                                
                {apiCall.retrieveAPIResponse.data.retrieve.counter?.length > 0 && (
                  <CounterComponent 
                    reduxCall={reduxCall}
                    apiResponse={apiResponse?.counter as CounterComponentDataType[]}
                  />
                )}
                
                {apiCall.retrieveAPIResponse.data.retrieve.branchSection && (
                  <BranchSectionComponent 
                    reduxCall={reduxCall}
                    apiResponse={apiResponse?.branchSection as BranchSectionComponentDataType}
                  />
                )}
                
                {apiCall.retrieveAPIResponse.data.retrieve.projectSection && (
                  <ProjectSectionComponent 
                    reduxCall={reduxCall}
                    apiResponse={apiResponse?.projectSection as ProjectSectionComponentDataType}
                  />
                )}
                
                {apiCall.retrieveAPIResponse.data.retrieve.contactInfo && (
                  <ContactInfoComponent 
                    reduxCall={reduxCall}
                    apiResponse={apiResponse?.contactInfo as ContactInfoComponentDataType}
                  />
                )}

              </div>
            </React.Fragment>
          ) : null
        ) : null
      }

    </React.Fragment>
  )
}

export default AdminHomePageComponent;

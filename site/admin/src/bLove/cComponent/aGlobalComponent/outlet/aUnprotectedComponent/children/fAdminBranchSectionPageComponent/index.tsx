import React from 'react'

import LoaderComponent from '@/bLove/cComponent/aGlobalComponent/component/aLoaderComponent';
import ErrorComponent from '@/bLove/cComponent/aGlobalComponent/component/bErrorComponent';


type AdminBranchSectionPageComponentType = {
  reduxCall: any,
  apiCall: any,
}

export type BranchComponentDataType = {
  aImage: string;
  aTitle: string;
  aSubtitle: string;
  aDescription: string;
  aDetail: string;
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
  aDetail: string;
  cBranches: BranchComponentDataType[];
};

export type BranchSectionComponentDataType = {
  aImage: string;
  aTitle: string;
  aSubtitle: string;
  aDescription: string;
  aDetail: string;
  cBranchGroups: BranchGroupComponentDataType[];
};

const AdminBranchSectionPageComponent = (props: AdminBranchSectionPageComponentType) => {
  // Destructure Props
  const { apiCall } = props;

  // Variables
  let apiResponse: BranchSectionComponentDataType | null = null;
  
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
    apiResponse = apiCall.retrieveAPIResponse.data.retrieve.branchSection;  
  }

  // JSX
  return (
    <React.Fragment>
      {/* AdminBranchSectionPageComponent */}

      {
        (apiCall.retrieveAPIResponse.isLoading || apiCall.retrieveAPIResponse.isFetching) ? <LoaderComponent /> : 
        (apiCall.retrieveAPIResponse.isError) ? <ErrorComponent message="Error..." /> :
        (apiCall.retrieveAPIResponse.isSuccess) ? (
          (apiCall.retrieveAPIResponse.data.success) ? (
            <React.Fragment>

              <div className="py-8" >
                <p className="font-myPrimaryFont text-2xl" >
                  Branch Section Section
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
                <div>
                  <p className="font-mySecondaryFont text-sm" >
                    Branch Groups:
                  </p>
                  {apiResponse?.cBranchGroups?.map((each, index) => (
                    <div className="m-4 p-4 border" key={index} >
                      <p className="font-mySecondaryFont text-sm" >
                        Branch Group {index+1}
                      </p>
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
                      <div>
                        <p className="font-mySecondaryFont text-sm" >
                          Branches:
                        </p>
                        {each?.cBranches?.map((each2, index2) => (
                          <div className="m-4 p-4 border" key={index2} >
                            <p className="font-mySecondaryFont text-sm" >
                              Branch {index2+1}:
                            </p>
                            <p className="font-mySecondaryFont text-sm" >
                              Image: {each2.aImage}
                            </p>
                            <p className="font-mySecondaryFont text-sm" >
                              Title: {each2.aTitle}
                            </p>
                            <p className="font-mySecondaryFont text-sm" >
                              Subtitle: {each2.aSubtitle}
                            </p>
                            <p className="font-mySecondaryFont text-sm" >
                              Description: {each2.aDescription}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                  ))}
                </div>
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

export default AdminBranchSectionPageComponent;

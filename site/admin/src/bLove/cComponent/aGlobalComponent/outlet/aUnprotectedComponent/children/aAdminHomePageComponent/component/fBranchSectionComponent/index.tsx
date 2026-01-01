import React from 'react'
import { BranchSectionComponentDataType } from '../..';


type BranchSectionComponentType = {
  reduxCall: any,
  apiResponse: BranchSectionComponentDataType,
}

const BranchSectionComponent = (props: BranchSectionComponentType) => {
  // Destructure Props
  const { apiResponse } = props;

  // JSX
  return (
    <React.Fragment>
      {/* BranchSectionComponent */}

      <div className="py-8" >
        <p className="font-myPrimaryFont text-2xl" >
          Branch Section Section
        </p>
        <p className="font-mySecondaryFont text-sm" >
          Image: {apiResponse.aImage}
        </p>
        <p className="font-mySecondaryFont text-sm" >
          Title: {apiResponse.aTitle}
        </p>
        <p className="font-mySecondaryFont text-sm" >
          Subtitle: {apiResponse.aSubtitle}
        </p>
        <p className="font-mySecondaryFont text-sm" >
          Description: {apiResponse.aDescription}
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
    </React.Fragment>
  )
}

export default BranchSectionComponent;

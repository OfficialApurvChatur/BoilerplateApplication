import React from 'react'
import { ProjectSectionComponentDataType } from '../../..';


type ProjectSectionComponentType = {
  reduxCall: any,
  apiResponse: ProjectSectionComponentDataType,
}

const ProjectSectionComponent = (props: ProjectSectionComponentType) => {
  // Destructure Props
  const { reduxCall, apiResponse } = props;

  // JSX
  return (
    <React.Fragment>
      {/* ProjectSectionComponent */}

      <div className="py-8" >
        <p className="font-myPrimaryFont text-2xl" >
          Project Section Section
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
            Project Groups:
          </p>
          {apiResponse?.cProjectGroups?.map((each, index) => (
            <div className="m-4 p-4 border" key={index} >
              <p className="font-mySecondaryFont text-sm" >
                Project Group {index+1}
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
                  Projects:
                </p>
                {each?.cProjects?.map((each2, index2) => (
                  <div className="m-4 p-4 border" key={index2} >
                    <p className="font-mySecondaryFont text-sm" >
                      Project {index2+1}:
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

export { ProjectSectionComponent }

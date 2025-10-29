import React from 'react'
import { AboutApplicationComponentDataType } from '../../..';


type AboutApplicationComponentType = {
  reduxCall: any,
  apiResponse: AboutApplicationComponentDataType,
}

const AboutApplicationComponent = (props: AboutApplicationComponentType) => {
  // Destructure Props
  const { apiResponse } = props;

  // JSX
  return (
    <React.Fragment>
      {/* AboutApplicationComponent */}

      <div className="py-8" >
        <p className="font-myPrimaryFont text-2xl" >
          About Application Section
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
        <p className="font-mySecondaryFont text-sm" >
          Tech Icon:
          {apiResponse?.dTechIcon?.map((each, index) => (
            <p className="px-4" >{`${index+1}) ${each?.aIconLabel} (${each?.bIconValue})`}</p>
          ))}
        </p>
      </div>

    </React.Fragment>
  )
}

export { AboutApplicationComponent }

import React from 'react'
import { ServiceComponentDataType } from '../..';


type ServiceComponentType = {
  reduxCall: any,
  apiResponse: ServiceComponentDataType[],
}

const ServiceComponent = (props: ServiceComponentType) => {
  // Destructure Props
  const { apiResponse } = props;

  // JSX
  return (
    <React.Fragment>
      {/* ServiceComponent */}

      <div className="py-8" >
        <p className="font-myPrimaryFont text-2xl" >
          Service Section
        </p>

        {apiResponse?.map((each, index) => (
          <div className="px-4 py-4" key={index} >
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
            <p className="font-mySecondaryFont text-sm" >
              Links:
              {each?.dLinks?.map((each, index) => (
                <p className="px-4" >{`${index+1}) ${each?.aLinkTitle} (${each?.bLinkURL})`}</p>
              ))}
            </p>
            <p className="font-mySecondaryFont text-sm" >
              Icon:
                <p className="px-4" >{`${1}) ${each?.dIcon?.aIconLabel} ${each?.dIcon?.bIconValue}`}</p>
            </p>
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}

export default ServiceComponent;

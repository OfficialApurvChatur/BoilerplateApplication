import React from 'react'
import { CounterComponentDataType } from '../../..';


type CounterComponentType = {
  reduxCall: any,
  apiResponse: CounterComponentDataType[],
}

const CounterComponent = (props: CounterComponentType) => {
  // Destructure Props
  const { apiResponse } = props;

  // JSX
  return (
    <React.Fragment>
      {/* CounterComponent */}

      <div className="py-8" >
        <p className="font-myPrimaryFont text-2xl" >
          Counter Section
        </p>

        {apiResponse?.map((each, index) => (
          <div className="px-4 py-4" key={index} >
            <p className="font-mySecondaryFont text-sm">
              Image: {each.aImage}
            </p>
            <p className="font-mySecondaryFont text-sm">
              Title: {each.aTitle}
            </p>
            <p className="font-mySecondaryFont text-sm">
              Subtitle: {each.aSubtitle}
            </p>
            <p className="font-mySecondaryFont text-sm">
              Description: {each.aDescription}
            </p>
          </div>
        ))}
      </div>

    </React.Fragment>
  )
}

export { CounterComponent }

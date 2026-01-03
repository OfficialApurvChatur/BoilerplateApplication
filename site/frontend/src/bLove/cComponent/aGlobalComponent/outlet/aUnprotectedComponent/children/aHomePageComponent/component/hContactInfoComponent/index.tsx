import React from 'react'
import { ContactInfoComponentDataType } from '../..';


type ContactInfoComponentType = {
  reduxCall: any,
  apiResponse: ContactInfoComponentDataType,
}

const ContactInfoComponent = (props: ContactInfoComponentType) => {
  // Destructure Props
  const { apiResponse } = props;

  // JSX
  return (
    <React.Fragment>
      {/* ContactInfoComponent */}

      <div className="py-8" >
        <p className="font-myPrimaryFont text-2xl" >
          Contact Info Section
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
      </div>

    </React.Fragment>
  )
}

export default ContactInfoComponent;

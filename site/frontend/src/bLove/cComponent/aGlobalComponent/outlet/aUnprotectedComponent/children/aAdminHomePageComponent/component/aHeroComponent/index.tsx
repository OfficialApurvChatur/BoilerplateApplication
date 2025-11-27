import React from 'react'
import { HeroComponentDataType } from '../..';
import { HeroParallaxDemo } from './component/cHeroParalaxComponent';


type HeroComponentType = {
  reduxCall: any,
  apiResponse: HeroComponentDataType,
}

const HeroComponent = (props: HeroComponentType) => {
  // Destructure Props
  const {  } = props;

  // JSX
  return (
    <React.Fragment>
      {/* HeroComponent */}

      {/* <div className="py-8" >
        <p className="font-myPrimaryFont text-3xl" >
          Hero Section
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
          Tag: {apiResponse.dTag}
        </p>
        <p className="font-mySecondaryFont text-sm" >
          Social Links:
          {apiResponse?.dSocialLinks?.map((each, index) => (
            <p className="px-4" >{`${index+1}) ${each?.aLinkTitle} (${each?.bLinkURL})`}</p>
          ))}
        </p>
        <p className="font-mySecondaryFont text-sm" >
          Web Links:
          {apiResponse?.dWebLinks?.map((each, index) => (
            <p className="px-4" >{`${index+1}) ${each?.aLinkTitle} (${each?.bLinkURL})`}</p>
          ))}
        </p>
        <p className="font-mySecondaryFont text-sm" >
          Gallery Images:
          {apiResponse?.dGalleryImages?.map((each, index) => (
            <p className="px-4" >{`${index+1}) ${each})`}</p>
          ))}
        </p>
      </div> */}

      <section id="hero" >
        <HeroParallaxDemo 
          reduxCall={props.reduxCall}
          apiResponse={props.apiResponse}
        />
      </section>
    </React.Fragment>
  )
}

export default HeroComponent;

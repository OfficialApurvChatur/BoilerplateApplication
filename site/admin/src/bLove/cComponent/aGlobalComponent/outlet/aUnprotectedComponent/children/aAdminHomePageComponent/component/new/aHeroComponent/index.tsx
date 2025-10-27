import React from 'react'
import { HeroComponentDataType } from '../../..';


type HeroComponentType = {
  reduxCall: any,
  apiResponse: HeroComponentDataType,
}

const HeroComponent = (props: HeroComponentType) => {
  // Destructure Props
  const { reduxCall, apiResponse } = props;

  // JSX
  return (
    <React.Fragment>
      {/* HeroComponent */}

      <div className="py-8" >
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
      </div>

      {/* <div className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h1 className="font-myPrimaryFont md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
          Aceternity
        </h1>
        <div className="w-[60rem] h-60 relative">
          Gradients
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
  
          Core component
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={2}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
  
          Radial Gradient to prevent sharp edges
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div> */}

      {/* <div className="h-screen relative w-full overflow-hidden bg-black flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
  
        <Boxes />
        <h1 className={cn("md:text-4xl text-4xl text-white relative z-20 ")}>
          Tailwind is Awesome
        </h1>
        <p className="text-center mt-2 text-neutral-300 relative z-20">
          Framer motion is the best animation library ngl
        </p>
      </div> */}

    </React.Fragment>
  )
}

export { HeroComponent }

import React from 'react'
import { AboutApplicationComponentDataType } from '../..';
import { DraggableCardComponent } from './component/aDraggableCardComponent';
import { PointerHighlight } from '@/aConnection/bShadcnConnection/components/ui/pointer-highlight';
import { Typewriter } from '@/aConnection/bShadcnConnection/components/ui/typewriter';
import { GlowingEffect } from '@/aConnection/bShadcnConnection/components/ui/glowing-effect';


type AboutApplicationComponentType = {
  reduxCall: any,
  apiResponse: AboutApplicationComponentDataType,
}

const AboutApplicationComponent = (props: AboutApplicationComponentType) => {
  // Destructure Props
  const { reduxCall, apiResponse } = props;

  const highlightWord = "modern applications connect";
  const subtitle = apiResponse.aSubtitle || "";
  const parts = subtitle.split(new RegExp(`(${highlightWord})`, "gi"));

  // JSX
  return (
    <React.Fragment>
      {/* AboutApplicationComponent */}

      {/* <div className="py-8" >
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
      </div> */}

      <section id="about-application" className="container py-24 sm:py-32" >
        <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl py-20">
          <GlowingEffect
            blur={0}
            borderWidth={1}
            spread={80}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
          <div className="p-4 flex flex-col flex-1 gap-10 items-center w-full">

            <PointerHighlight>
              <h2 className="font-myPrimaryFont text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  {apiResponse.aTitle}
                </span>
              </h2>     
            </PointerHighlight>

            <div className="font-mySecondaryFont mx-auto mt-4 max-w-lg text-lg font-bold tracking-tight md:text-lg text-center">
              {parts.map((part, index) =>
                part.toLowerCase() === highlightWord.toLowerCase() ? (
                  <PointerHighlight
                  key={index}
                  rectangleClassName="bg-neutral-200 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600 leading-loose"
                  pointerClassName="text-yellow-500 h-3 w-3"
                  containerClassName="inline-block mr-1"
                  >
                    <span className="relative z-10">{part}</span>
                  </PointerHighlight>
                ) : (
                  <span key={index}>{part}</span>
                )
              )}
            </div>

            <Typewriter 
              text={apiResponse.aDescription || ""} 
              renderMarkdown 
              className="prose font-mySecondaryFont text-lg text-muted-foreground text-center" 
            /> 

            <DraggableCardComponent
              reduxCall={reduxCall}
              apiResponse={apiResponse}
            />
          </div>
        </div>
      </section>

    </React.Fragment>
  )
}

export default AboutApplicationComponent;

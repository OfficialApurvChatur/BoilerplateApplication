import React from 'react'
import { ServiceComponentDataType } from '../..';
import { InlineHighlightComponent } from './component/aInlineHighlightComponent';
import { PointerHighlight } from '@/aConnection/bShadcnConnection/components/ui/pointer-highlight';
import { GlowingEffect } from '@/aConnection/bShadcnConnection/components/ui/glowing-effect';
import { Typewriter } from '@/aConnection/bShadcnConnection/components/ui/typewriter';


type ServiceComponentType = {
  reduxCall: any,
  apiResponse: ServiceComponentDataType[],
}

const ServiceComponent = (props: ServiceComponentType) => {
  // Destructure Props
  const { reduxCall, apiResponse } = props;

  const highlightWord = "Innovating";
  const subtitle = "Innovating Today, Engineering Tomorrow.";
  const parts = subtitle.split(new RegExp(`(${highlightWord})`, "gi"));

  // JSX
  return (
    <React.Fragment>
      {/* ServiceComponent */}

      {/* <div className="py-8" >
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
      </div> */}

      <section id="services" className="container py-24 sm:py-32" >
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
                  {`Our Services`}
                </span>
              </h2>     
            </PointerHighlight>

            <div className="font-mySecondaryFont mx-auto mt-4 max-w-lg text-lg font-bold tracking-tight md:text-lg text-center text-foreground">
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
              text="We are a forward-thinking technology company committed to building scalable, reliable, and user-centric digital solutions. With a strong focus on innovation, quality, and long-term value, we empower businesses to accelerate growth, enhance efficiency, and confidently navigate the digital landscape." 
              renderMarkdown 
              className="prose font-mySecondaryFont text-lg text-muted-foreground text-center" 
            /> 
            
            <InlineHighlightComponent 
              reduxCall={reduxCall}
              apiResponse={apiResponse}
            />

          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default ServiceComponent;

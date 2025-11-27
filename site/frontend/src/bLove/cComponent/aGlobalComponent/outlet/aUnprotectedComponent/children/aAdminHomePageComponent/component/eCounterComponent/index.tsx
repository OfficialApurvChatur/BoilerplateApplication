import React from 'react'
import { motion } from "motion/react";
import { CounterComponentDataType } from '../..';
import { StatisticComponent } from './component/aStatisticComponent';
import { Typewriter } from '@/aConnection/bShadcnConnection/components/ui/typewriter';
import { PointerHighlight } from '@/aConnection/bShadcnConnection/components/ui/pointer-highlight';
import { GlowingEffect } from '@/aConnection/bShadcnConnection/components/ui/glowing-effect';


type CounterComponentType = {
  reduxCall: any,
  apiResponse: CounterComponentDataType[],
}

const images = [
  "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const CounterComponent = (props: CounterComponentType) => {
  // Destructure Props
  const { reduxCall, apiResponse } = props;

  const highlightWord = "Measuring";
  const subtitle = "Measuring Growth, Performance, and Excellence";
  const parts = subtitle.split(new RegExp(`(${highlightWord})`, "gi"));

  // JSX
  return (
    <React.Fragment>
      {/* CounterComponent */}

      {/* <div className="py-8" >
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
      </div> */}

      <section id="counter" className="container py-24 sm:py-32" >
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
                  {"Our Statistics"}
                </span>
              </h2>     
            </PointerHighlight>

            <div className="font-mySecondaryFont mx-auto mt-4 max-w-lg text-base font-bold tracking-tight md:text-base text-center">
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
              text="From client success to operational efficiency, our key metrics reflect our commitment to delivering high-value solutions. These numbers showcase our dedication to innovation, reliability, and consistent performance across every project we deliver." 
              renderMarkdown 
              className="prose font-mySecondaryFont text-lg text-muted-foreground text-center" 
            /> 
                        
            <div className="py-12 w-full">
              <div className="px-6 flex flex-col gap-8 md:gap-12">
                {/* <img
                  src={RandomModel1}
                  alt=""
                  className="w-[300px] object-contain rounded-lg"
                /> */}

                <div className="flex justify-center items-center">
                  {images.map((image, idx) => (
                    <motion.div
                      key={"images" + idx}
                      style={{
                        rotate: Math.random() * 20 - 10,
                      }}
                      whileHover={{
                        scale: 1.1,
                        rotate: 0,
                        zIndex: 100,
                      }}
                      whileTap={{
                        scale: 1.1,
                        rotate: 0,
                        zIndex: 100,
                      }}
                      className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
                    >
                      <img
                        src={image}
                        alt="bali images"
                        width="500"
                        height="500"
                        className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
                      />
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-col justify-between">
                  <StatisticComponent 
                    reduxCall={reduxCall}
                    apiResponse={apiResponse}
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default CounterComponent;

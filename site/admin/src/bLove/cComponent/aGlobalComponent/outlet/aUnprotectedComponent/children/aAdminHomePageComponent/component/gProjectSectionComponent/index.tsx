import React from 'react'
import { ProjectSectionComponentDataType } from '../..';
import { GalleryComponent } from './component/aGalleryComponent.tsx';
import { PointerHighlight } from '@/aConnection/bShadcnConnection/components/ui/pointer-highlight.tsx';
import { Typewriter } from '@/aConnection/bShadcnConnection/components/ui/typewriter.tsx';
import { GlowingEffect } from '@/aConnection/bShadcnConnection/components/ui/glowing-effect.tsx';


type ProjectSectionComponentType = {
  reduxCall: any,
  apiResponse: ProjectSectionComponentDataType,
}

const ProjectSectionComponent = (props: ProjectSectionComponentType) => {
  // Destructure Props
  const { apiResponse } = props;

  const highlightWord = "minimal effort";
  const subtitle = apiResponse?.aSubtitle || "";
  const parts = subtitle.split(new RegExp(`(${highlightWord})`, "gi"));

  // JSX
  return (
    <React.Fragment>
      {/* ProjectSectionComponent */}

      {/* <div className="py-8" >
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
      </div> */}

      <section id="project-section" className="container py-24 sm:py-32" >
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
              text={apiResponse.aDescription} 
              renderMarkdown 
              className="prose font-mySecondaryFont text-lg text-muted-foreground text-center" 
            /> 
            
            {/* <AnimatedTabComponent 
              apiResponse={apiResponse.cBranchGroups as BranchGroupComponentDataType[]}
              reduxCall={reduxCall}
            /> */}
            
            <GalleryComponent />
            
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default ProjectSectionComponent;

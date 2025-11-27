import React from 'react'
import { AboutCompanyComponentDataType } from '../../';
// import { Typewriter } from '@/aConnection/bShadcnConnection/components/ui/typewriter';
import Anisha_Wase from "@/bLove/hAsset/Avatar/Anisha_Wase.png";
import Ashlesha_Wase from "@/bLove/hAsset/Avatar/Ashlesha_Wase.png";
import Astha_Jain from "@/bLove/hAsset/Avatar/Astha_Jain.png";
import Avrutti_Hadke from "@/bLove/hAsset/Avatar/Avrutti_Hadke.png";
import Dhruvika_Khinvasara from "@/bLove/hAsset/Avatar/Dhruvika_Khinvasara.png";
import Geeta_Kulkarni from "@/bLove/hAsset/Avatar/Geeta_Kulkarni.png";
import Hema_Kalsha from "@/bLove/hAsset/Avatar/Hema_Kalsha.png";
import Kanak_Kshirsagar from "@/bLove/hAsset/Avatar/Kanak_Kshirsagar.png";
import Kirti_Turkar from "@/bLove/hAsset/Avatar/Kirti_Turkar.png";
import Mayuri_Sangidwar from "@/bLove/hAsset/Avatar/Mayuri_Sangidwar.png";
import Nayan_Choudhari from "@/bLove/hAsset/Avatar/Nayan_Choudhari.png";
import Priti_Bokade from "@/bLove/hAsset/Avatar/Priti_Bokade.png";
import Purva_Ukey from "@/bLove/hAsset/Avatar/Purva_Ukey.png";
import Rashi_Suryawanshi from "@/bLove/hAsset/Avatar/Rashi_Suryawanshi.png";
import Rutuja_Bhoyar from "@/bLove/hAsset/Avatar/Rutuja_Bhoyar.png";
import { PointerHighlight } from '@/aConnection/bShadcnConnection/components/ui/pointer-highlight';
import { AnimatedTestimonials } from '@/aConnection/bShadcnConnection/components/ui/animated-testimonials';
import { GlowingEffect } from '@/aConnection/bShadcnConnection/components/ui/glowing-effect';
import brandConnection from '@/aConnection/eBrandConnection';
import { Typewriter } from '@/aConnection/bShadcnConnection/components/ui/typewriter';


type AboutCompanyComponentType = {
  reduxCall: any,
  apiResponse: {
    truly: AboutCompanyComponentDataType;
    relatively: AboutCompanyComponentDataType;
  },
}

const AboutCompanyComponent = (props: AboutCompanyComponentType) => {
  const highlightWord = "Innovating";
  const subtitle = "Innovating Today, Engineering Tomorrow.";
  const parts = subtitle.split(new RegExp(`(${highlightWord})`, "gi"));

  const testimonialImages = [
    Anisha_Wase,
    Ashlesha_Wase,
    Astha_Jain,
    Avrutti_Hadke,
    Dhruvika_Khinvasara,
    Geeta_Kulkarni,
    Hema_Kalsha,
    Kanak_Kshirsagar,
    Kirti_Turkar,
    Mayuri_Sangidwar,
    Nayan_Choudhari,
    Priti_Bokade,
    Purva_Ukey,
    Rashi_Suryawanshi,
    Rutuja_Bhoyar,
  ];

  const testimonials = testimonialImages.map((each, index) => {
    const isTruly = index % 2 === 0;

    const data = isTruly
      ? props.apiResponse.truly
      : props.apiResponse.relatively;

    return {
      quote: data.aDetail || "",
      name: data.aTitle || "",
      src: each,
    };
  });

  // JSX
  return (
    <React.Fragment>
      {/* AboutCompanyComponent */}

      {/* <div className="py-8" >
        <p className="font-myPrimaryFont text-2xl" >
          Truly About Company Section
        </p>
        <p className="font-mySecondaryFont text-sm" >
          Image: {apiResponse.truly.aImage}
        </p>
        <p className="font-mySecondaryFont text-sm" >
          Title: {apiResponse.truly.aTitle}
        </p>
        <p className="font-mySecondaryFont text-sm" >
          Subtitle: {apiResponse.truly.aSubtitle}
        </p>
        <p className="font-mySecondaryFont text-sm" >
          Description: {apiResponse.truly.aDescription}
        </p>
        <p className="font-mySecondaryFont text-sm" >
          Tag: {apiResponse.truly.dTag}
        </p>
      </div>

      <div className="py-8" >
        <p className="font-myPrimaryFont text-2xl" >
          Relatively About Company Section
        </p>
        <p className="font-mySecondaryFont text-sm" >
          Image: {apiResponse.relatively.aImage}
        </p>
        <p className="font-mySecondaryFont text-sm" >
          Title: {apiResponse.relatively.aTitle}
        </p>
        <p className="font-mySecondaryFont text-sm" >
          Subtitle: {apiResponse.relatively.aSubtitle}
        </p>
        <p className="font-mySecondaryFont text-sm" >
          Description: {apiResponse.relatively.aDescription}
        </p>
        <p className="font-mySecondaryFont text-sm" >
          Tag: {apiResponse.relatively.dTag}
        </p>
      </div> */}

      <section id="about-company" className="container py-24 sm:py-32" >
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
                  {`About ${brandConnection.bBrandName}`}
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
            
            <AnimatedTestimonials testimonials={testimonials} />

          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default AboutCompanyComponent;

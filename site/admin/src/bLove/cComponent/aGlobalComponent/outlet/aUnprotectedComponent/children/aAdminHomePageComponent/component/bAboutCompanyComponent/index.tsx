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



type AboutCompanyComponentType = {
  reduxCall: any,
  apiResponse: {
    truly: AboutCompanyComponentDataType;
    relatively: AboutCompanyComponentDataType;
  },
}

const testimonials = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Truly About Company",
    designation: "Product Manager at TechFlow",
    src: Anisha_Wase,
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Relatively About Company",
    designation: "CTO at InnovateSphere",
    src: Ashlesha_Wase,
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Truly About Company",
    designation: "Operations Director at CloudScale",
    src: Astha_Jain,
  },
  {
    quote:
      "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    name: "Relatively About Company",
    designation: "Engineering Lead at DataPro",
    src: Avrutti_Hadke,
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Truly About Company",
    designation: "VP of Technology at FutureNet",
    src: Dhruvika_Khinvasara,
  },
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Relatively About Company",
    designation: "Product Manager at TechFlow",
    src: Geeta_Kulkarni,
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Truly About Company",
    designation: "CTO at InnovateSphere",
    src: Hema_Kalsha,
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Relatively About Company",
    designation: "Operations Director at CloudScale",
    src: Kanak_Kshirsagar,
  },
  {
    quote:
      "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    name: "Truly About Company",
    designation: "Engineering Lead at DataPro",
    src: Kirti_Turkar,
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Relatively About Company",
    designation: "VP of Technology at FutureNet",
    src: Mayuri_Sangidwar,
  },
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Truly About Company",
    designation: "Product Manager at TechFlow",
    src: Nayan_Choudhari,
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Relatively About Company",
    designation: "CTO at InnovateSphere",
    src: Priti_Bokade,
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Truly About Company",
    designation: "Operations Director at CloudScale",
    src: Purva_Ukey,
  },
  {
    quote:
      "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    name: "Relatively About Company",
    designation: "Engineering Lead at DataPro",
    src: Rashi_Suryawanshi,
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Truly About Company",
    designation: "VP of Technology at FutureNet",
    src: Rutuja_Bhoyar,
  },
];

const AboutCompanyComponent = (_props: AboutCompanyComponentType) => {
  //"Relatively About Company
  // const { reduxCall, apiResponse } = props;

  const highlightWord = "Ecosystems";
  const subtitle = "Building Digital Ecosystems That Thrive";
  const parts = subtitle.split(new RegExp(`(${highlightWord})`, "gi"));

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
                  {"About Beehive Corporation"}
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

            {/* <Typewriter 
              text="
                At Beehive Corporation, we believe in crafting intelligent, interconnected solutions that empower brands, teams, and communities to grow together.
                Our mission is to merge innovation with purpose, designing digital experiences that resonate beyond technology.
                From visionary startups to enterprise-level collaborations, we cultivate a culture of creativity, integrity, and long-term impact—because real progress happens when every idea finds its hive.
              " 
              renderMarkdown 
              className="prose font-mySecondaryFont text-lg text-muted-foreground text-center" 
            />  */}
            
            <div className="w-full" >
              <AnimatedTestimonials testimonials={testimonials} />
            </div>

          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default AboutCompanyComponent;

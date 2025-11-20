"use client";
import { FlipWords } from "@/aConnection/bShadcnConnection/components/ui/flip-words";
import { LayoutTextFlip } from "@/aConnection/bShadcnConnection/components/ui/layout-text-flip";
import { motion } from "motion/react";
import { HoverBorderGradientComponent } from "../dHoverBorderGradient";
import { TypewriterEffectSmooth } from "@/aConnection/bShadcnConnection/components/ui/typewriter-effect";
import { HeroFloatingDockComponent } from "../eHeroFloatingDockComponent";

export function LayoutTextFlipComponent() {
  const words = ["design", "development", "deployment", "maintenance", "scalable"];

  const words2 = [
    {
      text: "Infinite",
    },
    {
      text: "Wonder",
    },
    {
      text: "Awaits...",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="my-20" >
      <HoverBorderGradientComponent />
      <motion.div className="relative mx-4 my-8 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row">
        <LayoutTextFlip
          text="Welcome to "
          words={["Beehive Corporation", "Beehive Administration", "The Sigma Cluster"]}
        />
      </motion.div>
      <div className="flex flex-col flex-1 justify-center items-center px-4 mt-8 gap-4">
        <TypewriterEffectSmooth 
          words={words2} 
          className="font-mySecondaryFont"
        />
        <div className="mb-24 font-mySecondaryFont text-center text-lg lg:text-xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 w-2/3">
          A proficient corporation specializing in the comprehensive lifecycle management of web applications, 
          encompassing <FlipWords words={words} /> <br /> solutions. 
        </div>
        <HeroFloatingDockComponent />
      </div>

    </div>
  );
}

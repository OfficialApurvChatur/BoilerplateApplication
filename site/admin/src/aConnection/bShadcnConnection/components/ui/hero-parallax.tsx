"use client";
import React, { useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
  AnimatePresence,
  useCycle,
} from "motion/react";
import { HeroComponentDataType } from "@/bLove/cComponent/aGlobalComponent/outlet/aUnprotectedComponent/children/aAdminHomePageComponent";
import { LayoutTextFlip } from "./layout-text-flip";
import { Button as MovingButton } from "./moving-border";
import { FlipWords } from "./flip-words";
import { TypewriterEffectSmooth } from "./typewriter-effect";
import { HeroFloatingDockComponent } from "@/bLove/cComponent/aGlobalComponent/outlet/aUnprotectedComponent/children/aAdminHomePageComponent/component/aHeroComponent/component/eHeroFloatingDockComponent";
import { EyeClosedIcon, LockKeyholeIcon, LockKeyholeOpenIcon } from "lucide-react";
import { EyeOpenIcon } from "@radix-ui/react-icons";
import { Button } from "./button";


export const HeroParallax = ({
  products,
  reduxCall,
  apiResponse
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
  reduxCall: any,
  apiResponse: HeroComponentDataType,
}) => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  useEffect(() => {
    const interval = setInterval(() => {
      toggleOpen();
    }, 1500); // change every 1.5s
    return () => clearInterval(interval);
  }, [toggleOpen]);

  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  const iconPairs: Record<number, { open: JSX.Element; closed: JSX.Element }> = {
    0: {
      open: <EyeOpenIcon className="h-5 w-5" />,
      closed: <EyeClosedIcon className="h-5 w-5" />,
    },
    1: {
      open: <LockKeyholeOpenIcon className="h-5 w-5" />,
      closed: <LockKeyholeIcon className="h-5 w-5" />,
    },
  };

  return (
    <div
      ref={ref}
      className="h-[400vh] overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header 
        reduxCall={reduxCall}
        apiResponse={apiResponse}  
      />

      <HeroFloatingDockComponent
        reduxCall={reduxCall}
        apiResponse={apiResponse}  
      />

      {/* <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
          delay: 1,
        }}
        className="relative z-10 flex flex-wrap items-center justify-center gap-4"
      >
        <Button variant="secondary" size="lg" className="flex items-center gap-4 font-myPrimaryFont text-lg">
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.span
                key="open"
                initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                transition={{ duration: 0.25 }}
              >
                <EyeOpenIcon className="h-5 w-5" />
              </motion.span>
            ) : (
              <motion.span
                key="closed"
                initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                transition={{ duration: 0.25 }}
              >
                <EyeClosedIcon className="h-5 w-5" />
              </motion.span>
            )}
          </AnimatePresence>

          <motion.span
            key={isOpen ? "open-text" : "closed-text"}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? "Visit Administration" : "Visit Administration"}
          </motion.span>
        </Button>
        <Button variant="secondary" size="lg" className="flex items-center gap-4 font-myPrimaryFont text-lg">
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.span
                key="open"
                initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                transition={{ duration: 0.25 }}
              >
                <LockKeyholeOpenIcon className="h-5 w-5" />
              </motion.span>
            ) : (
              <motion.span
                key="closed"
                initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                transition={{ duration: 0.25 }}
              >
                <LockKeyholeIcon className="h-5 w-5" />
              </motion.span>
            )}
          </AnimatePresence>

          <motion.span
            key={isOpen ? "open-text" : "closed-text"}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            {"Go Back Home"}
          </motion.span>
        </Button>
      </motion.div> */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 1 }}
        className="relative z-10 flex flex-wrap items-center justify-center gap-4"
      >
        {apiResponse.dWebLinks.map((link, index) => (
          <Button
            key={index}
            variant="outline"
            size="lg"
            className="flex items-center gap-4 font-myPrimaryFont text-lg"
            onClick={() => window.open(link.bLinkURL, "_blank")}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.span
                  key={`icon-open-${index}`}
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  transition={{ duration: 0.25 }}
                >
                  {iconPairs[index]?.open ?? iconPairs[0].open}
                </motion.span>
              ) : (
                <motion.span
                  key={`icon-closed-${index}`}
                  initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  transition={{ duration: 0.25 }}
                >
                  {iconPairs[index]?.closed ?? iconPairs[0].closed}
                </motion.span>
              )}
            </AnimatePresence>

            <motion.span
              key={`text-${index}-${isOpen ? "open" : "closed"}`}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {link.aLinkTitle}
            </motion.span>
          </Button>
        ))}

        <Button variant="outline" size="lg" className="flex items-center gap-4 font-myPrimaryFont text-lg">
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.span
                key="open"
                initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                transition={{ duration: 0.25 }}
              >
                <EyeOpenIcon className="h-5 w-5" />
              </motion.span>
            ) : (
              <motion.span
                key="closed"
                initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                transition={{ duration: 0.25 }}
              >
                <EyeClosedIcon className="h-5 w-5" />
              </motion.span>
            )}
          </AnimatePresence>

          <motion.span
            key={isOpen ? "open-text" : "closed-text"}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? "Visit Administration" : "Visit Administration"}
          </motion.span>
        </Button>

      </motion.div>

      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

type HeaderType = {
  reduxCall: any,
  apiResponse: HeroComponentDataType,
}

export const Header = (props: HeaderType) => {
  return (
    <div className="max-w-7xl mx-auto py-20 md:py-40 px-4 w-ful flex flex-col items-center text-center gap-6">

      {/* Tag */}
      <MovingButton
        borderRadius="1.75rem"
        className="px-4 py-2 font-mySecondaryFont"
      >
        {props.apiResponse.dTag}
      </MovingButton>

      {/* Title */}
      <motion.div className="relative mx-4 my-4 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row font-myPrimaryFont ">
        <LayoutTextFlip
          text="Welcome to "
          words={[props.apiResponse.aTitle]}
        />
      </motion.div>      
      
      {/* Subtitle */}
      <TypewriterEffectSmooth
        className="font-mySecondaryFont"
        words={props.apiResponse.aSubtitle
          .split(/\s+/)
          .filter(Boolean)
          .map((word, idx, arr) => ({
            text: word,
            className: idx === arr.length - 1 ? "text-blue-500 dark:text-blue-500" : undefined,
          }))
        } 
      />

      {/* Description */}
      <div className="w-full md:w-2/3 font-mySecondaryFont text-xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        A proficient corporation specializing in the comprehensive lifecycle management of web applications, encompassing
        <FlipWords words={["design", "development", "deployment", "maintenance", "scalable"]} /> <br />
        solutions.
      </div>

    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative shrink-0"
    >
      <a
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};

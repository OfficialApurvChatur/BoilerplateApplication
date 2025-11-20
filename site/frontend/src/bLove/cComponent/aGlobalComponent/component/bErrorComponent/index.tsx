import React, { useEffect } from 'react'

import {
  motion,
  // useScroll,
  // useTransform,
  // useSpring,
  // MotionValue,
  AnimatePresence,
  useCycle,
} from "motion/react";
import { Button } from '@/aConnection/bShadcnConnection/components/ui/button';
import { EyeOpenIcon } from '@radix-ui/react-icons';
import { EyeClosedIcon, LockKeyholeIcon, LockKeyholeOpenIcon } from 'lucide-react';


const ErrorComponent = (_props: any) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  
  useEffect(() => {
    const interval = setInterval(() => {
      toggleOpen();
    }, 1500); // change every 1.5s
    return () => clearInterval(interval);
  }, [toggleOpen]);

  // JSX
  return (
    <React.Fragment>
      {/* ErrorComponent */}
      {/* <div className="flex justify-center items-center h-96" >
        {props.message || "Waiting..."}
      </div> */}

      <div className="flex justify-center items-center min-h-fit" >
        {/* <LoaderFive text={props.message || "Waiting..."} /> */}
        <section className="">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
              <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
                404
              </h1>
              <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
                Something's missing.
              </p>
              <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                Sorry, we can't find that page. You'll find lots to explore on the home page. 
              </p>

              <motion.div
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
              </motion.div>
        

            </div>   
          </div>
      </section>
      </div>

    </React.Fragment>
  )
}

export default ErrorComponent;

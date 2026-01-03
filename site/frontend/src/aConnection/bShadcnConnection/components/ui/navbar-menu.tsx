"use client";
import React, { ReactNode } from "react";
import { motion, spring } from "motion/react";
import { GlowingEffect } from "@/aConnection/bShadcnConnection/components/ui/glowing-effect";
import { useNavigate } from "react-router-dom";


const transition = {
  type: spring,
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: ReactNode;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive((item as any))} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer hover:opacity-[0.8] text-xs font-mySecondaryFont"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-popover rop-blur-sm rounded-2xl overflow-hidden shadow-xl"
              >
                <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl">
                  <GlowingEffect
                    blur={0}
                    borderWidth={1}
                    spread={80}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                  />
                  <motion.div
                    layout // layout ensures smooth animation
                    className="w-max h-full p-4"
                  >
                    {children}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  link,
  children,
}: {
  setActive: (item: string | null) => void;
  link: string
  children: React.ReactNode;
}) => {
  const navigate = useNavigate();

  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      onClick={() => navigate(link)}
      className="relative rounded-full border border-transparent shadow-input flex items-center justify-center space-x-4 px-8 py-3 w-full"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <a href={href} className="flex space-x-2">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1">
          {title}
        </h4>
        <p className="text-sm max-w-[10rem]">
          {description}
        </p>
      </div>
    </a>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <a
      {...rest}
      // className="text-neutral-700 dark:text-neutral-200 hover:text-black "
    >
      {children}
    </a>
  );
};

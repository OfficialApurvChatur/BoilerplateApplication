import { ArrowDownRight, Star } from "lucide-react";

import { Avatar, AvatarImage } from "@/aConnection/bShadcnConnection/components/ui/avatar";
import { Button } from "@/aConnection/bShadcnConnection/components/ui/button";

import FuchsiaRaspberry_06 from '@/bLove/hAsset/fuchsia-raspberry-006.jpg'
import Swati_Patil from '@/bLove/hAsset/Avatar/Swati_Patil.png'
import Urvashi_Gupta from '@/bLove/hAsset/Avatar/Urvashi_Gupta.png'
import Vasupradha_Agrawal from '@/bLove/hAsset/Avatar/Vasupradha_Agrawal.png'
import Anisha_Wase from '@/bLove/hAsset/Avatar/Anisha_Wase.png'
import Anushree_Mandape from '@/bLove/hAsset/Avatar/Anushree_Mandape.png'


interface HeroComponentProps {
  heading?: string;
  description?: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
  reviews?: {
    count: number;
    avatars: {
      src: any;
      alt: string;
    }[];
    rating?: number;
  };
}

const HeroComponent = ({
  heading = "Boilerplate",
  description = "Finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.",
  buttons = {
    primary: {
      text: "Sign Up",
      url: "https://www.shadcnblocks.com",
    },
    secondary: {
      text: "Get Started",
      url: "https://www.shadcnblocks.com",
    },
  },
  reviews = {
    count: 200,
    rating: 5.0,
    avatars: [
      {
        src: Swati_Patil,
        alt: "Swati_Patil",
      },
      {
        src: Urvashi_Gupta,
        alt: "Urvashi_Gupta",
      },
      {
        src: Vasupradha_Agrawal,
        alt: "Vasupradha_Agrawal",
      },
      {
        src: Anisha_Wase,
        alt: "Anisha_Wase",
      },
      {
        src: Anushree_Mandape,
        alt: "Anushree_Mandape",
      },
    ],
  },
}: HeroComponentProps) => {
  return (
    <section>
      <div className="container grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <div className="flex">
          <img
            src={FuchsiaRaspberry_06}
            alt="placeholder hero"
            className="max-h-[600px] w-full rounded-md object-cover lg:max-h-[650px]"
          />
        </div>
        <div className="mx-auto flex flex-col items-center text-center md:ml-auto lg:max-w-3xl lg:items-start lg:text-left">
          <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl xl:text-7xl">
            {heading}
          </h1>
          <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl">
            {description}
          </p>
          <div className="mb-12 flex w-fit flex-col items-center gap-4 sm:flex-row">
            <span className="inline-flex items-center -space-x-4">
              {reviews.avatars.map((avatar, index) => (
                <Avatar key={index} className="size-12 border">
                  <AvatarImage src={avatar.src} alt={avatar.alt} />
                </Avatar>
              ))}
            </span>
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className="size-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
                <span className="mr-1 font-semibold">
                  {reviews.rating?.toFixed(1)}
                </span>
              </div>
              <p className="text-muted-foreground text-left font-medium">
                from {reviews.count}+ reviews
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
            {buttons.primary && (
              <Button asChild className="w-full sm:w-auto">
                <a href={buttons.primary.url}>{buttons.primary.text}</a>
              </Button>
            )}
            {buttons.secondary && (
              <Button asChild variant="outline">
                <a href={buttons.secondary.url}>
                  {buttons.secondary.text}
                  <ArrowDownRight className="size-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeroComponent };
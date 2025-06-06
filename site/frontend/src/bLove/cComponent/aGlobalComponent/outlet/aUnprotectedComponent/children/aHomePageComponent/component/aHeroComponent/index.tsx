import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Badge } from "@/aConnection/bShadcnConnection/components/ui/badge";
import { Button } from "@/aConnection/bShadcnConnection/components/ui/button";

import fullRoute from "@/bLove/gRoute/bFullRoute";
import React from "react";


interface Hero1Props {
  ReduxCall: any;
  APICall: any;
  badge?: string;
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
  image?: {
    src: string;
    alt: string;
  };
}

const HeroComponent = ({
  ReduxCall,
  APICall,
  badge = "✨ Your Website Builder",
  heading = "Blocks Built With Shadcn & Tailwind",
  description = "Finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.",
  buttons = {
    primary: {
      text: "Discover all components",
      url: "https://www.shadcnblocks.com",
    },
    secondary: {
      text: "View on GitHub",
      url: "https://www.shadcnblocks.com",
    },
  },
  image = {
    src: "https://www.shadcnblocks.com/images/block/placeholder-1.svg",
    alt: "Hero section demo image showing interface components",
  },
}: Hero1Props) => {
  return (
    <React.Fragment>
      <section className="py-32">
        <div className="container">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              {badge && (
                <Badge variant="outline">
                  {APICall.listAPIResponse.data?.list?.hero_list?.aSubtitle ? 
                    `✨ ${APICall.listAPIResponse.data?.list?.hero_list?.aSubtitle}` : badge
                  }
                  <ArrowUpRight className="ml-2 size-4" />
                </Badge>
              )}
              <h1 className="my-6 text-pretty text-3xl font-bold lg:text-5xl">
                {APICall.listAPIResponse.data?.list?.hero_list?.aTitle || heading}
              </h1>
              <p className="mb-8 max-w-xl text-muted-foreground lg:text-lg">
                {APICall.listAPIResponse.data?.list?.hero_list?.aDescription || description}
              </p>
              <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                {
                  (ReduxCall.state.receivedObject?.AccountRetrieve?.eAccountStatus === "Verified" && ReduxCall.state.receivedObject?.AccountRetrieve?._id) ? (
                    <Button className="w-full md:w-1/3" asChild >
                      <Link to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.aTopbarRoute.aAccountRetrieveRoute} >
                        Get Started
                      </Link>
                    </Button>
                  ) :
                  (ReduxCall.state.receivedObject?.AccountRetrieve?.eAccountStatus === "Not Verified" && !ReduxCall.state.receivedObject?.AccountRetrieve?._id) ? (
                    <Button className="w-full md:w-1/3" asChild >
                      <Link to={fullRoute.aGlobalRoute.bProtectedRoute.aAutheticatedRoute.aSignInRoute} >
                        Sign In
                      </Link>
                    </Button>            
                  ) : null
                }
                {/* {buttons.primary && (
                  <Button asChild className="w-full sm:w-auto">
                    <a href={buttons.primary.url}>{buttons.primary.text}</a>
                  </Button>
                )} */}
                {buttons.secondary && (
                  <Button asChild variant="outline" className="w-full sm:w-auto">
                    <a href={buttons.secondary.url}>
                      {buttons.secondary.text}
                      <ArrowRight className="size-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
            <img
              src={APICall.listAPIResponse.data?.list?.hero_list?.aImage || image.src}
              alt={image.alt}
              className="max-h-96 w-full rounded-md object-cover"
            />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export { HeroComponent };

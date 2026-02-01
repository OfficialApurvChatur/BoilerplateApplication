import React from "react";
import { ServiceComponentDataType } from '../..';
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, ThreadsLogoIcon, TwitterLogoIcon } from '@/bLove/hAsset/Icons';
import { Service01Icon, Service02Icon, Service03Icon, Service04Icon, Service05Icon, Service06Icon } from '@/bLove/hAsset/Icons';


interface ServiceComponentProps {
  reduxCall: any;
  apiResponse: ServiceComponentDataType[];
}

export const ServiceComponent = (props: ServiceComponentProps) => {
  // Destructure Props
  const { apiResponse } = props;

  // JSX
  return (
    <React.Fragment>
      {/* ServiceComponent */}

      <section id="service" >
        <div className="bg-gradient-to-tl from-muted/100 via-muted/50 to-muted/0 p-6 sm:p-8">
          {/* Header */}
          <div className="max-w-xl mx-auto text-center py-20">
            <div className="relative after:absolute after:-bottom-5 after:h-1 after:w-1/2 after:bg-foreground after:left-0 after:right-0 after:mx-auto after:rounded-full">
              <h2 className="text-foreground text-4xl font-bold !leading-tight uppercase">Our Services</h2>
            </div>
            <div className="mt-12">
              <p className="text-muted-foreground text-base">
                This section highlights the solutions and capabilities offered, outlining 
                how they help users achieve their goals effectively.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="p-4">
            <div className="max-w-screen-xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 max-md:max-w-lg mx-auto">

                {apiResponse.map((each, index) => (
                  <React.Fragment key={each.aTitle} >
                    <div className="bg-muted text-left border border-muted-foreground rounded-3xl p-6">
                      {index === 0 && <Service01Icon /> }
                      {index === 1 && <Service02Icon /> }
                      {index === 2 && <Service03Icon /> }
                      {index === 3 && <Service04Icon /> }
                      {index === 4 && <Service05Icon /> }
                      {index === 5 && <Service06Icon /> }

                      <h3 className="text-foreground text-lg font-semibold mb-3 uppercase">
                        {each.aTitle}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {each.aDescription}
                      </p>
    
                      <ul className="flex items-center justify-center lg:justify-start mt-6 gap-4">
                        {each?.dLinks?.map((each) => (
                          <li key={each.aLinkTitle} >
                            <a 
                              href={each.bLinkURL} 
                              className="bg-foreground h-10 w-10 rounded-full flex items-center justify-center shrink-0"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {each.aLinkTitle === "Linkedin" && <LinkedInLogoIcon />}
                              {each.aLinkTitle === "X" && <TwitterLogoIcon />} 
                              {each.aLinkTitle === "Threads" && <ThreadsLogoIcon />}
                              {each.aLinkTitle === "Instagram" && <InstagramLogoIcon />}
                              {each.aLinkTitle === "Github" && <GitHubLogoIcon />}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>                  
                  </React.Fragment>
                ))}

              </div>
            </div>
          </div>
        </div>
      </section>

    </React.Fragment>
  );
};

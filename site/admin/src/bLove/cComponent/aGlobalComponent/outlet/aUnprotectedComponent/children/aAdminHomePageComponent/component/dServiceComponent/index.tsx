import React from 'react'
import { Link } from 'react-router-dom';
import { ServiceComponentDataType } from '../..';
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, ThreadsLogoIcon, TwitterLogoIcon } from '@/bLove/hAsset/Icons';
import { Service01Icon, Service02Icon, Service03Icon, Service04Icon, Service05Icon, Service06Icon } from '@/bLove/hAsset/Icons';
import fullRoute from '@/bLove/gRoute/bFullRoute';


type ServiceComponentType = {
  reduxCall: any,
  apiResponse: ServiceComponentDataType[],
}

const ServiceComponent = (props: ServiceComponentType) => {
  // Destructure Props
  const { apiResponse } = props;

  // JSX
  return (
    <React.Fragment>
      {/* ServiceComponent */}

      {/* <div className="py-8" >
        <p className="font-myPrimaryFont text-2xl" >
          Service Section
        </p>

        {apiResponse?.map((each, index) => (
          <div className="px-4 py-4" key={index} >
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
            <p className="font-mySecondaryFont text-sm" >
              Links:
              {each?.dLinks?.map((each, index) => (
                <p className="px-4" >{`${index+1}) ${each?.aLinkTitle} (${each?.bLinkURL})`}</p>
              ))}
            </p>
            <p className="font-mySecondaryFont text-sm" >
              Icon:
                <p className="px-4" >{`${1}) ${each?.dIcon?.aIconLabel} ${each?.dIcon?.bIconValue}`}</p>
            </p>
          </div>
        ))}
      </div> */}

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
                      <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
                        {each.aDescription}
                      </p>
    
                      <Link to={fullRoute.aGlobalRoute.aUnprotectedRoute.eAdminServicePageRoute} className="text-sm inline-flex items-center font-medium hover:text-muted-foreground mt-6">
                        Learn more<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1.5 fill-current" viewBox="0 0 24 24"><path d="m23.564 11.235-7.56-7.56a1.08 1.08 0 0 0-1.528 1.528l5.717 5.716H1.2a1.08 1.08 0 0 0 0 2.16h18.993l-5.717 5.716a1.08 1.08 0 1 0 1.528 1.528l7.56-7.56a1.08 1.08 0 0 0 0-1.528z" data-original="#000000"></path></svg>
                      </Link>

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
  )
}

export default ServiceComponent;

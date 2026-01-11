import React from 'react'
import { HeroComponentDataType } from '../..';
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, ThreadsLogoIcon, TwitterLogoIcon } from '@/bLove/hAsset/Icons';
import { Link } from 'react-router-dom';
import fullRoute from '@/bLove/gRoute/bFullRoute';


type HeroComponentType = {
  reduxCall: any,
  apiResponse: HeroComponentDataType,
}

const HeroComponent = (props: HeroComponentType) => {
  // Destructure Props
  const { apiResponse } = props;

  // JSX
  return (
    <React.Fragment>
      {/* HeroComponent */}

      {/* <div className="py-8" >
        <p className="font-myPrimaryFont text-3xl" >
          Hero Section
        </p>
        <p className="font-mySecondaryFont text-sm" >
          Image: {apiResponse.aImage}
        </p>
        <p className="font-mySecondaryFont text-sm" >
          Title: {apiResponse.aTitle}
        </p>
        <p className="font-mySecondaryFont text-sm" >
          Subtitle: {apiResponse.aSubtitle}
        </p>
        <p className="font-mySecondaryFont text-sm" >
          Description: {apiResponse.aDescription}
        </p>
        <p className="font-mySecondaryFont text-sm" >
          Tag: {apiResponse.dTag}
        </p>
        <p className="font-mySecondaryFont text-sm" >
          Social Links:
          {apiResponse?.dSocialLinks?.map((each, index) => (
            <p className="px-4" >{`${index+1}) ${each?.aLinkTitle} (${each?.bLinkURL})`}</p>
          ))}
        </p>
        <p className="font-mySecondaryFont text-sm" >
          Web Links:
          {apiResponse?.dWebLinks?.map((each, index) => (
            <p className="px-4" >{`${index+1}) ${each?.aLinkTitle} (${each?.bLinkURL})`}</p>
          ))}
        </p>
        <p className="font-mySecondaryFont text-sm" >
          Gallery Images:
          {apiResponse?.dGalleryImages?.map((each, index) => (
            <p className="px-4" >{`${index+1}) ${each})`}</p>
          ))}
        </p>
      </div> */}

      <section id="hero" >
        <div className="bg-gradient-to-tl from-muted/100 via-muted/50 to-muted/0">
          <div className="px-4 sm:px-10 py-14">
            <div className="max-w-screen-xl mx-auto">
              <div className="grid lg:grid-cols-2 justify-center items-center gap-x-12 gap-y-16">
                <div>
                  <div className="max-w-3xl max-lg:mx-auto max-lg:text-center">
                    <p className="mb-8 font-medium text-muted-foreground">
                      {apiResponse.dTag}
                    </p>
                    <h1 className="md:text-5xl text-4xl font-bold leading-tight uppercase">
                      {apiResponse.aTitle}
                    </h1>
                    <h2 className="md:text-2xl text-xl text-foreground leading-relaxed tracking-wide mt-2">
                      {apiResponse.aSubtitle}
                    </h2>
                    <p className="text-muted-foreground text-base leading-relaxed mt-6">
                      {apiResponse.aDescription}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-6 max-lg:justify-center">
                      {apiResponse?.dWebLinks?.map((each) => (
                        <Link key={each.aLinkTitle} to={each.bLinkURL} >
                          <button 
                            type='button'
                            className="
                              bg-foreground hover:bg-foreground/50 
                              border border-muted hover:border-muted/50 transition-all 
                              text-base text-muted font-medium 
                              rounded-lg px-5 py-3 cursor-pointer outline-0
                            "
                          >
                            {each?.aLinkTitle}
                          </button>
                        </Link>
                      ))}

                      <Link to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.hMainRoute.aDashboardRoute} >
                        <button 
                          type='button'
                          className="
                            bg-background hover:bg-background/50 
                            border border-muted-foreground hover:border-muted-foreground/50 transition-all 
                            text-base text-muted-foreground font-medium 
                            rounded-lg px-5 py-3 cursor-pointer outline-0
                          "
                        >
                          Explore Features
                        </button>
                      </Link>
                    </div>
                  </div>

                  {/* <div className="mt-12">
                    <div className="grid sm:grid-cols-3 gap-x-4 gap-y-6 max-lg:text-center">
                      <div className="flex flex-col">
                        <h5 className="text-muted-foreground font-semibold text-2xl mb-2">10+</h5>
                        <p className="text-base text-foreground font-medium">Years Experience</p>
                      </div>
                      <div className="flex flex-col">
                        <h5 className="text-muted-foreground font-semibold text-2xl mb-2">890</h5>
                        <p className="text-base text-foreground font-medium">Cases Solved</p>
                      </div>
                      <div className="flex flex-col">
                        <h5 className="text-muted-foreground font-semibold text-2xl mb-2">250</h5>
                        <p className="text-base text-foreground font-medium">Business Partners</p>
                      </div>
                    </div>
                  </div> */}

                  <div className="mt-12">
                    <p className="text-base text-muted-foreground text-center lg:text-left">Follow us for the latest updates:</p>
                    <ul className="flex items-center justify-center lg:justify-start mt-4 gap-4">
                      {apiResponse?.dSocialLinks?.map((each) => (
                        <li key={each.aLinkTitle} >
                          <a 
                            href={each.bLinkURL} 
                            className="bg-foreground h-10 w-10 rounded-full flex items-center justify-center shrink-0"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {each.aLinkTitle === "LinkedIn" && <LinkedInLogoIcon />}
                            {each.aLinkTitle === "X (Twitter)" && <TwitterLogoIcon />}
                            {each.aLinkTitle === "Threads" && <ThreadsLogoIcon />}
                            {each.aLinkTitle === "Instagram" && <InstagramLogoIcon />}
                            {each.aLinkTitle === "GitHub" && <GitHubLogoIcon />}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="columns-2 space-y-4">
                  <div className="break-inside-avoid p-1 bg-muted-foreground rounded-lg">
                    <img src="https://picsum.photos/200/300.webp?random=1" alt="img-1"
                      className="w-full h-full object-cover object-top rounded-lg max-h-[360px]" />
                  </div>
                  <div className="break-inside-avoid p-1 bg-muted-foreground rounded-lg">
                    <img src="https://picsum.photos/200/300.webp?random=2" alt="img-2"
                      className="w-full h-full object-cover object-top rounded-lg max-h-[360px]" />
                  </div>
                  <div className="break-inside-avoid p-1 bg-muted-foreground rounded-lg">
                    <img src="https://picsum.photos/200/300.webp?random=3" alt="img-3"
                      className="w-full h-full object-cover object-top rounded-lg max-h-[360px]" />
                  </div>
                  <div className="break-inside-avoid p-1 bg-muted-foreground rounded-lg">
                    <img src="https://picsum.photos/200/300.webp?random=4" alt="img-4"
                      className="w-full h-full object-cover object-top rounded-lg max-h-[360px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default HeroComponent;

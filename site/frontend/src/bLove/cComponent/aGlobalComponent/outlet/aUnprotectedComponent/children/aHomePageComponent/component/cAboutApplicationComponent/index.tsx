import React, { useState } from 'react'
import { AboutApplicationComponentDataType } from '../..';

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import brandConnection from '@/aConnection/eBrandConnection';


type AboutApplicationComponentType = {
  reduxCall: any,
  apiResponse: AboutApplicationComponentDataType,
}

const AboutApplicationComponent = (props: AboutApplicationComponentType) => {
  // Destructure Props
  const { apiResponse } = props;

  // Variable
  const mainApplication = `About ${brandConnection.vMainApplication}`;
  const frontendApplication = `About ${brandConnection.vFrontendApplication}`;
  const adminApplication = `About ${brandConnection.vAdminApplication}`;
  const backendApplication = `About ${brandConnection.vBackendApplication}`;

  const aboutMainApplication = apiResponse.find((each) => each.aTitle === mainApplication);
  const aboutFrontendApplication = apiResponse.find((each) => each.aTitle === frontendApplication);
  const aboutAdminApplication = apiResponse.find((each) => each.aTitle === adminApplication);
  const aboutBackendApplication = apiResponse.find((each) => each.aTitle === backendApplication);

  // State Variable
  type TabKey = typeof frontendApplication | typeof adminApplication | typeof backendApplication;
  const [selectedTab, setSelectedTab] = useState<TabKey>(frontendApplication);

  // Samll Utility
  const tabClass = (tab: TabKey) =>`
    font-semibold text-sm py-3 px-3 lg:px-8 cursor-pointer transition-all
    w-full text-left lg:w-auto lg:text-center
    ${
      selectedTab === tab
        ? "text-muted bg-foreground border-b-2 border-muted-foreground"
        : "text-muted-foreground hover:border-b-2 hover:border-muted-foreground hover:bg-foreground hover:text-muted"
    }`; 

  // JSX
  return (
    <React.Fragment>
      {/* AboutApplicationComponent */}

      {/* <div className="py-8" >
        <p className="font-myPrimaryFont text-2xl" >
          About Application Section
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
          Tech Icon:
          {apiResponse?.dTechIcon?.map((each, index) => (
            <p className="px-4" >{`${index+1}) ${each?.aIconLabel} (${each?.bIconValue})`}</p>
          ))}
        </p>
      </div> */}

      <section id="about-application" >
        <div className="bg-gradient-to-tl from-muted/60 via-muted/60 to-muted/20 p-6 sm:p-8">
          {/* Header */}
          <div className="max-w-xl mx-auto text-center py-20">
            <div className="relative after:absolute after:-bottom-5 after:h-1 after:w-1/2 after:bg-foreground after:left-0 after:right-0 after:mx-auto after:rounded-full">
              <h2 className="text-foreground text-4xl font-bold !leading-tight uppercase">About Application</h2>
            </div>
            <div className="mt-12">
              <p className="text-muted-foreground text-base leading-relaxed">
                This section gives a clear introduction to the application, explaining 
                what it does, how it works, and the value it delivers to users.
              </p>
            </div>
          </div>

          {/* Blog */}
          <div className="p-8 tracking-wide max-w-7xl max-lg:max-w-2xl max-lg:mx-auto">
            <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="lg:col-span-1">
                <div className="columns-3 lg:columns-4 space-y-4">
                  {aboutMainApplication?.dGalleryImages?.map((each, index) => (
                    <div
                      key={index}
                      className="
                        break-inside-avoid p-[2px] bg-muted rounded-xl
                        border-2 border-muted-foreground
                        shadow-foreground shadow-sm hover:shadow-xl 
                        transition-all duration-300 hover:-translate-y-1
                      "
                    >
                      <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
                          <img
                            src={each || "https://picsum.photos/200/300.webp?random=1"}
                            alt={`img-${index}`}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                        <div
                          className="
                            pointer-events-none absolute inset-0
                            bg-gradient-to-t
                            from-current/80 via-transparent to-transparent
                          "
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full lg:col-span-1">
                <p className="text-sm text-muted-foreground">
                  <article 
                    className="
                      prose max-w-none dark:prose-invert prose-headings:font-bold text-sm
                      prose-li:marker:text-foreground leading-normal text-muted-foreground
                    "
                  >
                    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} >
                      {aboutMainApplication?.aDetail}
                    </ReactMarkdown>
                  </article>
                </p>
              </div>
            </div>

            <div className="mt-12 w-full lg:w-11/13">
              <ul className="flex flex-col lg:flex-row border-b border-muted-foreground">
                <li
                  className={tabClass(frontendApplication)}
                  onClick={() => setSelectedTab(frontendApplication)}
                >
                  🌐 Frontend Application
                </li>
                <li 
                  className={tabClass(adminApplication)}
                  onClick={() => setSelectedTab(adminApplication)}
                >
                  🧠 Admin Application
                </li>
                <li 
                  className={tabClass(backendApplication)}
                  onClick={() => setSelectedTab(backendApplication)}
                >
                  🧩 Backend Application
                </li>
              </ul>

                {selectedTab === frontendApplication && (
                  <div id="frontend-application" >
                    <p className="text-sm text-muted-foreground mt-8">
                      <article 
                        className="
                          prose max-w-none dark:prose-invert prose-headings:font-bold text-sm
                          prose-li:marker:text-foreground leading-normal text-muted-foreground
                        "
                      >
                        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} >
                          {aboutFrontendApplication?.aDetail}
                        </ReactMarkdown>
                      </article>
                    </p>
                  </div>
                )}
                            
                {selectedTab === adminApplication && (
                  <div id="admin-application" >
                    <p className="text-sm text-muted-foreground mt-8">
                      <article 
                        className="
                          prose max-w-none dark:prose-invert prose-headings:font-bold text-sm
                          prose-li:marker:text-foreground leading-normal text-muted-foreground
                        "
                      >
                        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} >
                          {aboutAdminApplication?.aDetail}
                        </ReactMarkdown>
                      </article>
                    </p>
                  </div>
                )}
                            
                {selectedTab === backendApplication && (
                  <div id="backend-application" >
                    <p className="text-sm text-muted-foreground mt-8">
                      <article 
                        className="
                          prose max-w-none dark:prose-invert prose-headings:font-bold text-sm
                          prose-li:marker:text-foreground leading-normal text-muted-foreground
                        "
                      >
                        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} >
                          {aboutBackendApplication?.aDetail}
                        </ReactMarkdown>
                      </article>
                    </p>
                  </div>
                  )}
                            
            </div>
          </div>

        </div>
      </section>

    </React.Fragment>
  )
}

export default AboutApplicationComponent;

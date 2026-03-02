import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ProjectSectionComponentDataType } from "../..";


interface ProjectSectionComponentProps {
  reduxCall: any;
  apiResponse: ProjectSectionComponentDataType;
}

export const ProjectSectionComponent = (props: ProjectSectionComponentProps) => {
  // Destructure Props
  const { apiResponse } = props;

  // State Variable
  type TabKey = typeof apiResponse.cProjectGroups[number]["aTitle"];
  const [activeTab, setActiveTab] = useState<TabKey | undefined>(
    apiResponse?.cProjectGroups?.[0]?.aTitle
  );

  const tabClass = (tab: TabKey) =>
    `tab flex flex-col justify-center items-center uppercase bold tracking-wide
    border-2 rounded-lg text-sm cursor-pointer transition-all 
    w-full sm:min-w-[120px]
    ${
      activeTab === tab
        ? "border-muted-foreground text-background bg-muted-foreground font-semibold"
        : "border-muted-foreground text-foreground bg-muted hover:border-foreground hover:text-foreground"
    }
    py-4 px-4`;

    // JSX
  return (
    <React.Fragment>
      {/* ProjectSectionComponent */}

      <section id="project" >
        <div className="bg-gradient-to-tl from-muted/100 via-muted/50 to-muted/0 p-6 sm:p-8">
          {/* Header */}
          <div className="max-w-2xl mx-auto text-center py-20">
            <div className="relative after:absolute after:-bottom-5 after:h-1 after:w-1/2 after:bg-foreground after:left-0 after:right-0 after:mx-auto after:rounded-full">
              <h2 className="text-foreground text-4xl font-bold !leading-tight uppercase">Our Projects</h2>
            </div>
            <div className="mt-12">
              <p className="text-muted-foreground text-base">
                This section showcases key initiatives and works, highlighting 
                creativity, execution, innovation, and measurable real-world impact.
              </p>
            </div>
          </div>

          {/* Tabs */}
          {apiResponse?.cProjectGroups && apiResponse?.cProjectGroups?.length > 0 && (
            <div className="p-4">
              <ul className="flex max-sm:flex-col gap-x-2 gap-y-4 w-max rounded-lg items mx-auto text-center">
                {apiResponse.cProjectGroups.map((each, index) => (
                  <li 
                    key={index}
                    className={tabClass((each.aTitle as any))} 
                    onClick={() => setActiveTab((each.aTitle as any))}
                  >              
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 mb-3" viewBox="0 0 511 511.999">
                      <path
                        d="M498.7 222.695c-.016-.011-.028-.027-.04-.039L289.805 13.81C280.902 4.902 269.066 0 256.477 0c-12.59 0-24.426 4.902-33.332 13.809L14.398 222.55c-.07.07-.144.144-.21.215-18.282 18.386-18.25 48.218.09 66.558 8.378 8.383 19.44 13.235 31.273 13.746.484.047.969.07 1.457.07h8.32v153.696c0 30.418 24.75 55.164 55.168 55.164h81.711c8.285 0 15-6.719 15-15V376.5c0-13.879 11.293-25.168 25.172-25.168h48.195c13.88 0 25.168 11.29 25.168 25.168V497c0 8.281 6.715 15 15 15h81.711c30.422 0 55.168-24.746 55.168-55.164V303.14h7.719c12.586 0 24.422-4.903 33.332-13.813 18.36-18.367 18.367-48.254.027-66.633zm-21.243 45.422a17.03 17.03 0 0 1-12.117 5.024h-22.72c-8.285 0-15 6.714-15 15v168.695c0 13.875-11.289 25.164-25.168 25.164h-66.71V376.5c0-30.418-24.747-55.168-55.169-55.168H232.38c-30.422 0-55.172 24.75-55.172 55.168V482h-66.71c-13.876 0-25.169-11.29-25.169-25.164V288.14c0-8.286-6.715-15-15-15H48a13.9 13.9 0 0 0-.703-.032c-4.469-.078-8.66-1.851-11.8-4.996-6.68-6.68-6.68-17.55 0-24.234.003 0 .003-.004.007-.008l.012-.012L244.363 35.02A17.003 17.003 0 0 1 256.477 30c4.574 0 8.875 1.781 12.113 5.02l208.8 208.796.098.094c6.645 6.692 6.633 17.54-.031 24.207zm0 0"
                        data-original="#000000"></path>
                    </svg>
                    {each.aTitle}
                  </li>
                ))}
              </ul>

              {apiResponse.cProjectGroups.map((each) => (
                activeTab === each.aTitle && (
                  <div className="tab-content w-11/13 block mt-8">
                    <div className="bg-muted rounded-lg p-4">
                      <div className="max-w-6xl mx-auto">
                        <div className="text-center">
                          <h2 
                            className="
                              mt-8 text-3xl font-bold text-foreground inline-block relative uppercase tracking-wider
                              after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 
                              after:-bottom-4 after:mx-auto after:bg-foreground after:rounded-md-full
                            "
                          >
                            {each.aTitle}
                          </h2>
                          <div className="mt-6 flex flex-1 flex-col gap-4">
                            <h2 className="md:text-2xl text-xl text-foreground leading-relaxed tracking-wide mt-2">
                              {each.aSubtitle}
                            </h2>
                            <p className="text-muted-foreground text-base w-full md:w-2/3 mx-auto leading-relaxed">
                              {each.aDescription}
                            </p>                        
                          </div>
                        </div>

                        <div className="
                            sm:w-max mx-auto mt-12 bg-muted-foreground md:divide-x divide-muted flex rounded overflow-hidden 
                            max-sm:flex max-sm:flex-col max-sm:divide-y items-center justify-center
                          "
                        >
                          <button type="button"
                            className="px-5 py-2.5 cursor-pointer flex items-center text-background text-sm font-medium outline-none hover:bg-foreground transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17px" fill="currentColor" className="mr-2" viewBox="0 0 24 24">
                              <path d="M8.087 2a.989.989 0 0 0-.583.13l-7 4a1 1 0 0 0 0 1.737l7 4c.766.438 1.682-.256 1.467-1.111l-.316-1.27A.39.39 128.005 0 1 9.034 9H15.5c2.51 0 4.5 1.991 4.5 4.5S18.01 18 15.5 18H8a2 2 0 0 0 0 4h7.5c4.67 0 8.5-3.83 8.5-8.5S20.17 5 15.5 5H9.032a.39.39 52.01 0 1-.38-.485l.32-1.275A1.003 1.003 0 0 0 8.086 2z" data-original="#000000" paint-order="fill markers stroke" />
                            </svg>
                            Visit Frontend
                          </button>

                          <button type="button"
                            className="px-5 py-2.5 cursor-pointer flex items-center text-background text-sm font-medium outline-none hover:bg-foreground transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17px" fill="currentColor" className="mr-2" viewBox="0 0 24 24">
                              <path d="M8.087 2a.989.989 0 0 0-.583.13l-7 4a1 1 0 0 0 0 1.737l7 4c.766.438 1.682-.256 1.467-1.111l-.316-1.27A.39.39 128.005 0 1 9.034 9H15.5c2.51 0 4.5 1.991 4.5 4.5S18.01 18 15.5 18H8a2 2 0 0 0 0 4h7.5c4.67 0 8.5-3.83 8.5-8.5S20.17 5 15.5 5H9.032a.39.39 52.01 0 1-.38-.485l.32-1.275A1.003 1.003 0 0 0 8.086 2z" data-original="#000000" paint-order="fill markers stroke" />
                            </svg>
                            Visit Admin
                          </button>

                          <button type="button"
                            className="px-5 py-2.5 cursor-pointer flex items-center text-background text-sm font-medium outline-none hover:bg-foreground transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17px" fill="currentColor" className="mr-2" viewBox="0 0 24 24">
                              <path d="m20 8.6-8.38 8.38c-.29.29-.67.47-1.08.51l-2.93.27H7.5c-.33 0-.65-.13-.88-.37-.26-.26-.39-.63-.36-1l.27-2.93c.04-.41.22-.79.51-1.08L15.4 4zm1.94-5.83-.71-.71a2.758 2.758 0 0 0-3.89 0l-.88.88 4.6 4.6.88-.88a2.732 2.732 0 0 0 0-3.88zm-1.19 16.24V13.2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v5.81c0 1.24-1.01 2.25-2.25 2.25H5c-1.24 0-2.25-1.01-2.25-2.25V7c0-1.24 1.01-2.25 2.25-2.25h5.81c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H5C2.93 3.25 1.25 4.93 1.25 7v12c0 2.07 1.68 3.75 3.75 3.75h12c2.07 0 3.75-1.68 3.75-3.75z" data-original="#000000" />
                            </svg>
                            Check Code
                          </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-lg:max-w-3xl max-md:max-w-md mx-auto">
                          {each.cProjects.map(each => (
                            <div className="bg-background cursor-pointer rounded-md overflow-hidden [box-shadow:0_2px_10px_-3px_rgba(14,14,14,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
                              <div className="bg-muted-foreground p-1 aspect-[23/15]">
                                <img src={each.aImage || "https://readymadeui.com/Imagination.webp"} alt="Blog Post 1" className="w-full h-full object-cover rounded-md" />
                              </div>
                              <div className="p-6">
                                <span className="text-sm block text-muted-foreground mb-2">10 FEB 2023 | BY SHRADDHA KAPOOR</span>
                                <h2 className="text-xl font-semibold text-foreground uppercase mb-2">{each.aTitle}</h2>
                                <h2 className="text-sm font-normal text-foreground">{each.aSubtitle}</h2>
                                <hr className="my-4 border-foreground" />
                                <p className="text-muted-foreground text-sm leading-relaxed">{each.aDescription}</p>
                              </div>
                              <div className='px-6 pb-4 flex flex-col flex-1 gap-4' >
                                {each.dWebLinks.map(each => (
                                  <Link key={each.bLinkURL} to={each.bLinkURL} >
                                    <button 
                                      type='button'
                                      className="
                                        bg-foreground hover:bg-foreground/50 
                                        border border-muted hover:border-muted/50 transition-all 
                                        text-base text-muted font-medium 
                                        rounded-lg px-5 py-3 cursor-pointer outline-0 w-full
                                      "
                                    >
                                      {each?.aLinkTitle}
                                    </button>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>

                      </div>
                    </div>            
                  </div>
                )
              ))}
            </div>
          )}

          {/* Without Tabs */}
          {apiResponse?.cProjects && apiResponse?.cProjects?.length > 0 && (
            <div className="p-4">
              <div className="tab-content w-11/13 block mt-8">
                <div className="bg-muted rounded-lg p-4">
                  <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 lg:mt-8 max-lg:max-w-3xl max-md:max-w-md mx-auto">
                      {apiResponse?.cProjects?.map(each => (
                        <div className="bg-background cursor-pointer rounded-md overflow-hidden [box-shadow:0_2px_10px_-3px_rgba(14,14,14,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
                          <div className="bg-muted-foreground p-1 aspect-[23/15]">
                            <img src={each.aImage || "https://readymadeui.com/Imagination.webp"} alt="Blog Post 1" className="w-full h-full object-cover rounded-md" />
                          </div>
                          <div className="p-6">
                            <span className="text-sm block text-muted-foreground mb-2">10 FEB 2023 | BY SHRADDHA KAPOOR</span>
                            <h2 className="text-xl font-semibold text-foreground uppercase mb-2">{each.aTitle}</h2>
                            <h2 className="text-sm font-normal text-foreground">{each.aSubtitle}</h2>
                            <hr className="my-4 border-foreground" />
                            <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{each.aDescription}</p>
                          </div>
                          <div className='px-6 pb-4 flex flex-col flex-1 gap-4' >
                            {each.dWebLinks.map(each => (
                              <Link key={each.bLinkURL} to={each.bLinkURL} >
                                <button 
                                  type='button'
                                  className="
                                    bg-foreground hover:bg-foreground/50 
                                    border border-muted hover:border-muted/50 transition-all 
                                    text-base text-muted font-medium 
                                    rounded-lg px-5 py-3 cursor-pointer outline-0 w-full
                                  "
                                >
                                  {each?.aLinkTitle}
                                </button>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>            
              </div>
            </div>
          )}

        </div>
      </section>

    </React.Fragment>
  );
};

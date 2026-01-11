import React, { useState } from 'react'
import { BranchSectionComponentDataType } from '../..';


type BranchSectionComponentType = {
  reduxCall: any,
  apiResponse: BranchSectionComponentDataType,
}

const BranchSectionComponent = (props: BranchSectionComponentType) => {
  // Destructure Props
  const {  } = props;

  // State Variable
  type TabKey = "homeTab" | "settingTab" | "profileTab" | "inboxTab" | "notificationTab";
  const [activeTab, setActiveTab] = useState<TabKey>("homeTab");

  const tabClass = (tab: TabKey) =>
    `tab flex flex-col justify-center items-center uppercase
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
      {/* BranchSectionComponent */}

      {/* <div className="py-8" >
        <p className="font-myPrimaryFont text-2xl" >
          Branch Section Section
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
        <div>
          <p className="font-mySecondaryFont text-sm" >
            Branch Groups:
          </p>
          {apiResponse?.cBranchGroups?.map((each, index) => (
            <div className="m-4 p-4 border" key={index} >
              <p className="font-mySecondaryFont text-sm" >
                Branch Group {index+1}
              </p>
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
              <div>
                <p className="font-mySecondaryFont text-sm" >
                  Branches:
                </p>
                {each?.cBranches?.map((each2, index2) => (
                  <div className="m-4 p-4 border" key={index2} >
                    <p className="font-mySecondaryFont text-sm" >
                      Branch {index2+1}:
                    </p>
                    <p className="font-mySecondaryFont text-sm" >
                      Image: {each2.aImage}
                    </p>
                    <p className="font-mySecondaryFont text-sm" >
                      Title: {each2.aTitle}
                    </p>
                    <p className="font-mySecondaryFont text-sm" >
                      Subtitle: {each2.aSubtitle}
                    </p>
                    <p className="font-mySecondaryFont text-sm" >
                      Description: {each2.aDescription}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          ))}
        </div>
      </div> */}


      <section id="counter" >
        <div className="bg-gradient-to-tl from-muted/100 via-muted/50 to-muted/0 p-6 sm:p-8">
          {/* Header */}
          <div className="max-w-xl mx-auto text-center py-20">
            <div className="relative after:absolute after:-bottom-5 after:h-1 after:w-1/2 after:bg-foreground after:left-0 after:right-0 after:mx-auto after:rounded-full">
              <h2 className="text-foreground text-4xl font-bold !leading-tight">Let's Talk About Company</h2>
            </div>
            <div className="mt-12">
              <p className="text-muted-foreground text-base">Try using our templates to quickly create professional pages without starting from scratch. Save time, stay consistent, and customize designs to fit your brand perfectly.</p>
            </div>

            {/* <div className="flex max-sm:flex-col justify-center gap-6 mt-12 max-w-xs mx-auto">
              <button 
                type="button"
                className="
                  min-w-[140px] rounded-sm cursor-pointer px-4 py-2.5 
                  text-sm tracking-wider font-medium outline-none border 
                  text-background border-foreground bg-foreground hover:bg-transparent hover:text-foreground 
                  transition-all duration-300
                "
              >
                Try now
              </button>
              <button 
                type="button"
                className="
                  min-w-[140px] rounded-sm cursor-pointer px-4 py-2.5 
                  text-sm tracking-wider font-medium outline-none border 
                  text-foreground hover:text-background border-foreground hover:bg-foreground 
                  transition-all duration-300"
              >
                Cancel
              </button>
            </div> */}
          </div>

          {/* Tabs */}
          <div className="p-4">
            <ul className="flex max-sm:flex-col gap-x-2 gap-y-4 w-max rounded-lg items mx-auto text-center">
              <li 
                className={tabClass("homeTab")} 
                onClick={() => setActiveTab("homeTab")}
              >              
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 mb-3" viewBox="0 0 511 511.999">
                  <path
                    d="M498.7 222.695c-.016-.011-.028-.027-.04-.039L289.805 13.81C280.902 4.902 269.066 0 256.477 0c-12.59 0-24.426 4.902-33.332 13.809L14.398 222.55c-.07.07-.144.144-.21.215-18.282 18.386-18.25 48.218.09 66.558 8.378 8.383 19.44 13.235 31.273 13.746.484.047.969.07 1.457.07h8.32v153.696c0 30.418 24.75 55.164 55.168 55.164h81.711c8.285 0 15-6.719 15-15V376.5c0-13.879 11.293-25.168 25.172-25.168h48.195c13.88 0 25.168 11.29 25.168 25.168V497c0 8.281 6.715 15 15 15h81.711c30.422 0 55.168-24.746 55.168-55.164V303.14h7.719c12.586 0 24.422-4.903 33.332-13.813 18.36-18.367 18.367-48.254.027-66.633zm-21.243 45.422a17.03 17.03 0 0 1-12.117 5.024h-22.72c-8.285 0-15 6.714-15 15v168.695c0 13.875-11.289 25.164-25.168 25.164h-66.71V376.5c0-30.418-24.747-55.168-55.169-55.168H232.38c-30.422 0-55.172 24.75-55.172 55.168V482h-66.71c-13.876 0-25.169-11.29-25.169-25.164V288.14c0-8.286-6.715-15-15-15H48a13.9 13.9 0 0 0-.703-.032c-4.469-.078-8.66-1.851-11.8-4.996-6.68-6.68-6.68-17.55 0-24.234.003 0 .003-.004.007-.008l.012-.012L244.363 35.02A17.003 17.003 0 0 1 256.477 30c4.574 0 8.875 1.781 12.113 5.02l208.8 208.796.098.094c6.645 6.692 6.633 17.54-.031 24.207zm0 0"
                    data-original="#000000"></path>
                </svg>
                Andromeda Organisation
              </li>
              <li 
                className={tabClass("settingTab")} 
                onClick={() => setActiveTab("settingTab")}
              >
                <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className="w-5 h-5 mb-3" viewBox="0 0 682.667 682.667">
                  <defs>
                    <clipPath id="a" clipPathUnits="userSpaceOnUse">
                      <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                    </clipPath>
                  </defs>
                  <g clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                    <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="40"
                      d="M256 334.666c-43.446 0-78.667-35.22-78.667-78.667 0-43.446 35.221-78.666 78.667-78.666 43.446 0 78.667 35.22 78.667 78.666 0 43.447-35.221 78.667-78.667 78.667Zm220.802-22.53-21.299-17.534c-24.296-20.001-24.296-57.204 0-77.205l21.299-17.534c7.548-6.214 9.497-16.974 4.609-25.441l-42.057-72.845c-4.889-8.467-15.182-12.159-24.337-8.729l-25.835 9.678c-29.469 11.04-61.688-7.561-66.862-38.602l-4.535-27.213c-1.607-9.643-9.951-16.712-19.727-16.712h-84.116c-9.776 0-18.12 7.069-19.727 16.712l-4.536 27.213c-5.173 31.041-37.392 49.642-66.861 38.602l-25.834-9.678c-9.156-3.43-19.449.262-24.338 8.729l-42.057 72.845c-4.888 8.467-2.939 19.227 4.609 25.441l21.3 17.534c24.295 20.001 24.295 57.204 0 77.205l-21.3 17.534c-7.548 6.214-9.497 16.974-4.609 25.441l42.057 72.845c4.889 8.467 15.182 12.159 24.338 8.729l25.834-9.678c29.469-11.04 61.688 7.561 66.861 38.602l4.536 27.213c1.607 9.643 9.951 16.711 19.727 16.711h84.116c9.776 0 18.12-7.068 19.727-16.711l4.535-27.213c5.174-31.041 37.393-49.642 66.862-38.602l25.835 9.678c9.155 3.43 19.448-.262 24.337-8.729l42.057-72.845c4.888-8.467 2.939-19.227-4.609-25.441z"
                      data-original="#000000"></path>
                  </g>
                </svg>
                Pinwheel Organisation
              </li>
              <li 
                className={tabClass("profileTab")} 
                onClick={() => setActiveTab("profileTab")}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 mb-3" viewBox="0 0 512 512">
                  <path
                    d="M437.02 74.98C388.668 26.63 324.379 0 256 0S123.332 26.629 74.98 74.98C26.63 123.332 0 187.621 0 256s26.629 132.668 74.98 181.02C123.332 485.37 187.621 512 256 512s132.668-26.629 181.02-74.98C485.37 388.668 512 324.379 512 256s-26.629-132.668-74.98-181.02zM111.105 429.297c8.454-72.735 70.989-128.89 144.895-128.89 38.96 0 75.598 15.179 103.156 42.734 23.281 23.285 37.965 53.687 41.742 86.152C361.641 462.172 311.094 482 256 482s-105.637-19.824-144.895-52.703zM256 269.507c-42.871 0-77.754-34.882-77.754-77.753C178.246 148.879 213.13 114 256 114s77.754 34.879 77.754 77.754c0 42.871-34.883 77.754-77.754 77.754zm170.719 134.427a175.9 175.9 0 0 0-46.352-82.004c-18.437-18.438-40.25-32.27-64.039-40.938 28.598-19.394 47.426-52.16 47.426-89.238C363.754 132.34 315.414 84 256 84s-107.754 48.34-107.754 107.754c0 37.098 18.844 69.875 47.465 89.266-21.887 7.976-42.14 20.308-59.566 36.542-25.235 23.5-42.758 53.465-50.883 86.348C50.852 364.242 30 312.512 30 256 30 131.383 131.383 30 256 30s226 101.383 226 226c0 56.523-20.86 108.266-55.281 147.934zm0 0"
                    data-original="#000000"></path>
                </svg>
                Tadpole Organisation
              </li>
              <li 
                className={tabClass("inboxTab")} 
                onClick={() => setActiveTab("inboxTab")}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor" className="w-5 h-5 mb-3"
                  viewBox="0 0 682.667 682.667">
                  <defs>
                    <clipPath id="a" clipPathUnits="userSpaceOnUse">
                      <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                    </clipPath>
                  </defs>
                  <g clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                    <path fill="none" stroke-miterlimit="10" stroke-width="40"
                      d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                      data-original="#000000"></path>
                    <path
                      d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                      data-original="#000000"></path>
                  </g>
                </svg>
                Inbox
              </li>
              <li 
                className={tabClass("notificationTab")} 
                onClick={() => setActiveTab("notificationTab")}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 mb-3" viewBox="0 0 371.263 371.263">
                  <path
                    d="M305.402 234.794v-70.54c0-52.396-33.533-98.085-79.702-115.151.539-2.695.838-5.449.838-8.204C226.539 18.324 208.215 0 185.64 0s-40.899 18.324-40.899 40.899c0 2.695.299 5.389.778 7.964-15.868 5.629-30.539 14.551-43.054 26.647-23.593 22.755-36.587 53.354-36.587 86.169v73.115c0 2.575-2.096 4.731-4.731 4.731-22.096 0-40.959 16.647-42.995 37.845-1.138 11.797 2.755 23.533 10.719 32.276 7.904 8.683 19.222 13.713 31.018 13.713h72.217c2.994 26.887 25.869 47.905 53.534 47.905s50.54-21.018 53.534-47.905h72.217c11.797 0 23.114-5.03 31.018-13.713 7.904-8.743 11.797-20.479 10.719-32.276-2.036-21.198-20.958-37.845-42.995-37.845a4.704 4.704 0 0 1-4.731-4.731zM185.64 23.952c9.341 0 16.946 7.605 16.946 16.946 0 .778-.12 1.497-.24 2.275-4.072-.599-8.204-1.018-12.336-1.138-7.126-.24-14.132.24-21.078 1.198-.12-.778-.24-1.497-.24-2.275.002-9.401 7.607-17.006 16.948-17.006zm0 323.358c-14.431 0-26.527-10.3-29.342-23.952h58.683c-2.813 13.653-14.909 23.952-29.341 23.952zm143.655-67.665c.479 5.15-1.138 10.12-4.551 13.892-3.533 3.773-8.204 5.868-13.353 5.868H59.89c-5.15 0-9.82-2.096-13.294-5.868-3.473-3.772-5.09-8.743-4.611-13.892.838-9.042 9.282-16.168 19.162-16.168 15.809 0 28.683-12.874 28.683-28.683v-73.115c0-26.228 10.419-50.719 29.282-68.923 18.024-17.425 41.498-26.887 66.528-26.887 1.198 0 2.335 0 3.533.06 50.839 1.796 92.277 45.929 92.277 98.325v70.54c0 15.809 12.874 28.683 28.683 28.683 9.88 0 18.264 7.126 19.162 16.168z"
                    data-original="#000000"></path>
                </svg>
                Notification
              </li>
            </ul>
          
            {activeTab === "homeTab" && (
              <div className="tab-content w-11/13 block mt-8">
                <div className="bg-muted rounded-lg p-4">
                  <div className="max-w-6xl mx-auto">
                    <div className="text-center">
                      <h2 
                        className="
                          mt-8 text-3xl font-bold text-foreground inline-block relative 
                          after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 
                          after:-bottom-4 after:mx-auto after:bg-foreground after:rounded-md-full
                        "
                      >
                        ANDROMEDA ORGANISATION
                      </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-lg:max-w-3xl max-md:max-w-md mx-auto">
                      <div className="bg-background cursor-pointer rounded-md overflow-hidden [box-shadow:0_2px_10px_-3px_rgba(14,14,14,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
                        <div className="bg-muted-foreground p-1 aspect-[23/15]">
                          <img src="https://readymadeui.com/Imagination.webp" alt="Blog Post 1" className="w-full h-full object-cover object-top rounded-md" />
                        </div>
                        <div className="p-6">
                          <span className="text-sm block text-muted-foreground mb-2">10 FEB 2023 | BY JOHN DOE</span>
                          <h2 className="text-xl font-semibold text-foreground">A Guide to Igniting Your Imagination</h2>
                          <hr className="my-4 border-foreground" />
                          <p className="text-muted-foreground text-sm leading-relaxed">Discover practical tips to unlock your creativity and bring fresh ideas to life—perfect for creators, designers, and innovators looking to spark inspiration.</p>
                        </div>
                      </div>

                      <div className="bg-background cursor-pointer rounded-md overflow-hidden [box-shadow:0_2px_10px_-3px_rgba(14,14,14,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
                        <div className="bg-muted-foreground p-1 aspect-[23/15]">
                          <img src="https://readymadeui.com/hacks-watch.webp" alt="Blog Post 2" className="w-full h-full object-cover object-top rounded-md" />
                        </div>
                        <div className="p-6">
                          <span className="text-sm block text-muted-foreground mb-2">7 JUN 2023 | BY MARK ADAIR</span>
                          <h3 className="text-xl font-semibold text-foreground">Hacks to Supercharge Your Day</h3>
                          <hr className="my-4 border-foreground" />
                          <p className="text-muted-foreground text-sm leading-relaxed">Boost your productivity with simple, effective strategies to help you stay focused, energized, and motivated throughout the day.</p>
                        </div>
                      </div>

                      <div className="bg-background cursor-pointer rounded-md overflow-hidden [box-shadow:0_2px_10px_-3px_rgba(14,14,14,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
                        <div className="bg-muted-foreground p-1 aspect-[23/15]">
                          <img src="https://readymadeui.com/prediction.webp" alt="Blog Post 3" className="w-full h-full object-cover object-top rounded-md" />
                        </div>
                        <div className="p-6">
                          <span className="text-sm block text-muted-foreground mb-2">5 OCT 2023 | BY SIMON KONECKI</span>
                          <h3 className="text-xl font-semibold text-foreground">Trends and Predictions</h3>
                          <hr className="my-4 border-foreground" />
                          <p className="text-muted-foreground text-sm leading-relaxed">Stay ahead of the curve with the latest insights into upcoming industry trends, emerging technologies, and what they mean for the future.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>            
              </div>
            )}
          
            {activeTab === "settingTab" && (
              <div className="tab-content w-11/13 block mt-8">
                <div className="bg-muted rounded-lg p-4">
                  <div className="max-w-6xl mx-auto">
                    <div className="text-center">
                      <h2 
                        className="
                          mt-8 text-3xl font-bold text-foreground inline-block relative 
                          after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 
                          after:-bottom-4 after:mx-auto after:bg-foreground after:rounded-md-full
                        "
                      >
                        PINWHEEL ORGANISATION
                      </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-lg:max-w-3xl max-md:max-w-md mx-auto">
                      <div className="bg-background cursor-pointer rounded-md overflow-hidden [box-shadow:0_2px_10px_-3px_rgba(14,14,14,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
                        <div className="bg-muted-foreground p-1 aspect-[23/15]">
                          <img src="https://readymadeui.com/Imagination.webp" alt="Blog Post 1" className="w-full h-full object-cover object-top rounded-md" />
                        </div>
                        <div className="p-6">
                          <span className="text-sm block text-muted-foreground mb-2">10 FEB 2023 | BY JOHN DOE</span>
                          <h2 className="text-xl font-semibold text-foreground">A Guide to Igniting Your Imagination</h2>
                          <hr className="my-4 border-foreground" />
                          <p className="text-muted-foreground text-sm leading-relaxed">Discover practical tips to unlock your creativity and bring fresh ideas to life—perfect for creators, designers, and innovators looking to spark inspiration.</p>
                        </div>
                      </div>

                      <div className="bg-background cursor-pointer rounded-md overflow-hidden [box-shadow:0_2px_10px_-3px_rgba(14,14,14,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
                        <div className="bg-muted-foreground p-1 aspect-[23/15]">
                          <img src="https://readymadeui.com/hacks-watch.webp" alt="Blog Post 2" className="w-full h-full object-cover object-top rounded-md" />
                        </div>
                        <div className="p-6">
                          <span className="text-sm block text-muted-foreground mb-2">7 JUN 2023 | BY MARK ADAIR</span>
                          <h3 className="text-xl font-semibold text-foreground">Hacks to Supercharge Your Day</h3>
                          <hr className="my-4 border-foreground" />
                          <p className="text-muted-foreground text-sm leading-relaxed">Boost your productivity with simple, effective strategies to help you stay focused, energized, and motivated throughout the day.</p>
                        </div>
                      </div>

                      <div className="bg-background cursor-pointer rounded-md overflow-hidden [box-shadow:0_2px_10px_-3px_rgba(14,14,14,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
                        <div className="bg-muted-foreground p-1 aspect-[23/15]">
                          <img src="https://readymadeui.com/prediction.webp" alt="Blog Post 3" className="w-full h-full object-cover object-top rounded-md" />
                        </div>
                        <div className="p-6">
                          <span className="text-sm block text-muted-foreground mb-2">5 OCT 2023 | BY SIMON KONECKI</span>
                          <h3 className="text-xl font-semibold text-foreground">Trends and Predictions</h3>
                          <hr className="my-4 border-foreground" />
                          <p className="text-muted-foreground text-sm leading-relaxed">Stay ahead of the curve with the latest insights into upcoming industry trends, emerging technologies, and what they mean for the future.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>            
              </div>
            )}
          
            {activeTab === "profileTab" && (
              <div className="tab-content w-11/13 block mt-8">
                <div className="bg-muted rounded-lg p-4">
                  <div className="max-w-6xl mx-auto">
                    <div className="text-center">
                      <h2 
                        className="
                          mt-8 text-3xl font-bold text-foreground inline-block relative 
                          after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 
                          after:-bottom-4 after:mx-auto after:bg-foreground after:rounded-md-full
                        "
                      >
                        TADPOLE ORGANISATION
                      </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-lg:max-w-3xl max-md:max-w-md mx-auto">
                      <div className="bg-background cursor-pointer rounded-md overflow-hidden [box-shadow:0_2px_10px_-3px_rgba(14,14,14,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
                        <div className="bg-muted-foreground p-1 aspect-[23/15]">
                          <img src="https://readymadeui.com/Imagination.webp" alt="Blog Post 1" className="w-full h-full object-cover object-top rounded-md" />
                        </div>
                        <div className="p-6">
                          <span className="text-sm block text-muted-foreground mb-2">10 FEB 2023 | BY JOHN DOE</span>
                          <h2 className="text-xl font-semibold text-foreground">A Guide to Igniting Your Imagination</h2>
                          <hr className="my-4 border-foreground" />
                          <p className="text-muted-foreground text-sm leading-relaxed">Discover practical tips to unlock your creativity and bring fresh ideas to life—perfect for creators, designers, and innovators looking to spark inspiration.</p>
                        </div>
                      </div>

                      <div className="bg-background cursor-pointer rounded-md overflow-hidden [box-shadow:0_2px_10px_-3px_rgba(14,14,14,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
                        <div className="bg-muted-foreground p-1 aspect-[23/15]">
                          <img src="https://readymadeui.com/hacks-watch.webp" alt="Blog Post 2" className="w-full h-full object-cover object-top rounded-md" />
                        </div>
                        <div className="p-6">
                          <span className="text-sm block text-muted-foreground mb-2">7 JUN 2023 | BY MARK ADAIR</span>
                          <h3 className="text-xl font-semibold text-foreground">Hacks to Supercharge Your Day</h3>
                          <hr className="my-4 border-foreground" />
                          <p className="text-muted-foreground text-sm leading-relaxed">Boost your productivity with simple, effective strategies to help you stay focused, energized, and motivated throughout the day.</p>
                        </div>
                      </div>

                      <div className="bg-background cursor-pointer rounded-md overflow-hidden [box-shadow:0_2px_10px_-3px_rgba(14,14,14,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
                        <div className="bg-muted-foreground p-1 aspect-[23/15]">
                          <img src="https://readymadeui.com/prediction.webp" alt="Blog Post 3" className="w-full h-full object-cover object-top rounded-md" />
                        </div>
                        <div className="p-6">
                          <span className="text-sm block text-muted-foreground mb-2">5 OCT 2023 | BY SIMON KONECKI</span>
                          <h3 className="text-xl font-semibold text-foreground">Trends and Predictions</h3>
                          <hr className="my-4 border-foreground" />
                          <p className="text-muted-foreground text-sm leading-relaxed">Stay ahead of the curve with the latest insights into upcoming industry trends, emerging technologies, and what they mean for the future.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>            
              </div>
            )}

            {activeTab === "inboxTab" && (
              <div className="tab-content w-11/13 block mt-8">
                <div className="bg-muted rounded-lg p-4">
                  <div className="max-w-6xl mx-auto">
                    <div className="text-center">
                      <h2 
                        className="
                          mt-8 text-3xl font-bold text-foreground inline-block relative 
                          after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 
                          after:-bottom-4 after:mx-auto after:bg-foreground after:rounded-md-full
                        "
                      >
                        LATEST BLOGS
                      </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-lg:max-w-3xl max-md:max-w-md mx-auto">
                      <div className="bg-background cursor-pointer rounded-md overflow-hidden [box-shadow:0_2px_10px_-3px_rgba(14,14,14,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
                        <div className="bg-muted-foreground p-1 aspect-[23/15]">
                          <img src="https://readymadeui.com/Imagination.webp" alt="Blog Post 1" className="w-full h-full object-cover object-top rounded-md" />
                        </div>
                        <div className="p-6">
                          <span className="text-sm block text-muted-foreground mb-2">10 FEB 2023 | BY JOHN DOE</span>
                          <h2 className="text-xl font-semibold text-foreground">A Guide to Igniting Your Imagination</h2>
                          <hr className="my-4 border-foreground" />
                          <p className="text-muted-foreground text-sm leading-relaxed">Discover practical tips to unlock your creativity and bring fresh ideas to life—perfect for creators, designers, and innovators looking to spark inspiration.</p>
                        </div>
                      </div>

                      <div className="bg-background cursor-pointer rounded-md overflow-hidden [box-shadow:0_2px_10px_-3px_rgba(14,14,14,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
                        <div className="bg-muted-foreground p-1 aspect-[23/15]">
                          <img src="https://readymadeui.com/hacks-watch.webp" alt="Blog Post 2" className="w-full h-full object-cover object-top rounded-md" />
                        </div>
                        <div className="p-6">
                          <span className="text-sm block text-muted-foreground mb-2">7 JUN 2023 | BY MARK ADAIR</span>
                          <h3 className="text-xl font-semibold text-foreground">Hacks to Supercharge Your Day</h3>
                          <hr className="my-4 border-foreground" />
                          <p className="text-muted-foreground text-sm leading-relaxed">Boost your productivity with simple, effective strategies to help you stay focused, energized, and motivated throughout the day.</p>
                        </div>
                      </div>

                      <div className="bg-background cursor-pointer rounded-md overflow-hidden [box-shadow:0_2px_10px_-3px_rgba(14,14,14,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
                        <div className="bg-muted-foreground p-1 aspect-[23/15]">
                          <img src="https://readymadeui.com/prediction.webp" alt="Blog Post 3" className="w-full h-full object-cover object-top rounded-md" />
                        </div>
                        <div className="p-6">
                          <span className="text-sm block text-muted-foreground mb-2">5 OCT 2023 | BY SIMON KONECKI</span>
                          <h3 className="text-xl font-semibold text-foreground">Trends and Predictions</h3>
                          <hr className="my-4 border-foreground" />
                          <p className="text-muted-foreground text-sm leading-relaxed">Stay ahead of the curve with the latest insights into upcoming industry trends, emerging technologies, and what they mean for the future.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>            
              </div>
            )}
          
            {activeTab === "notificationTab" && (
              <div className="tab-content w-11/13 block mt-8">
                <div className="bg-muted rounded-lg p-4">
                  <div className="max-w-6xl mx-auto">
                    <div className="text-center">
                      <h2 
                        className="
                          mt-8 text-3xl font-bold text-foreground inline-block relative 
                          after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 
                          after:-bottom-4 after:mx-auto after:bg-foreground after:rounded-md-full
                        "
                      >
                        LATEST BLOGS
                      </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-lg:max-w-3xl max-md:max-w-md mx-auto">
                      <div className="bg-background cursor-pointer rounded-md overflow-hidden [box-shadow:0_2px_10px_-3px_rgba(14,14,14,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
                        <div className="bg-muted-foreground p-1 aspect-[23/15]">
                          <img src="https://readymadeui.com/Imagination.webp" alt="Blog Post 1" className="w-full h-full object-cover object-top rounded-md" />
                        </div>
                        <div className="p-6">
                          <span className="text-sm block text-muted-foreground mb-2">10 FEB 2023 | BY JOHN DOE</span>
                          <h2 className="text-xl font-semibold text-foreground">A Guide to Igniting Your Imagination</h2>
                          <hr className="my-4 border-foreground" />
                          <p className="text-muted-foreground text-sm leading-relaxed">Discover practical tips to unlock your creativity and bring fresh ideas to life—perfect for creators, designers, and innovators looking to spark inspiration.</p>
                        </div>
                      </div>

                      <div className="bg-background cursor-pointer rounded-md overflow-hidden [box-shadow:0_2px_10px_-3px_rgba(14,14,14,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
                        <div className="bg-muted-foreground p-1 aspect-[23/15]">
                          <img src="https://readymadeui.com/hacks-watch.webp" alt="Blog Post 2" className="w-full h-full object-cover object-top rounded-md" />
                        </div>
                        <div className="p-6">
                          <span className="text-sm block text-muted-foreground mb-2">7 JUN 2023 | BY MARK ADAIR</span>
                          <h3 className="text-xl font-semibold text-foreground">Hacks to Supercharge Your Day</h3>
                          <hr className="my-4 border-foreground" />
                          <p className="text-muted-foreground text-sm leading-relaxed">Boost your productivity with simple, effective strategies to help you stay focused, energized, and motivated throughout the day.</p>
                        </div>
                      </div>

                      <div className="bg-background cursor-pointer rounded-md overflow-hidden [box-shadow:0_2px_10px_-3px_rgba(14,14,14,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
                        <div className="bg-muted-foreground p-1 aspect-[23/15]">
                          <img src="https://readymadeui.com/prediction.webp" alt="Blog Post 3" className="w-full h-full object-cover object-top rounded-md" />
                        </div>
                        <div className="p-6">
                          <span className="text-sm block text-muted-foreground mb-2">5 OCT 2023 | BY SIMON KONECKI</span>
                          <h3 className="text-xl font-semibold text-foreground">Trends and Predictions</h3>
                          <hr className="my-4 border-foreground" />
                          <p className="text-muted-foreground text-sm leading-relaxed">Stay ahead of the curve with the latest insights into upcoming industry trends, emerging technologies, and what they mean for the future.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>            
              </div>
            )}
          
          </div>

        </div>
      </section>

    </React.Fragment>
  )
}

export default BranchSectionComponent;

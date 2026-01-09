import React, { useState } from 'react'
import { AboutApplicationComponentDataType } from '../..';


type AboutApplicationComponentType = {
  reduxCall: any,
  apiResponse: AboutApplicationComponentDataType,
}

const AboutApplicationComponent = (props: AboutApplicationComponentType) => {
  // Destructure Props
  const {} = props;

  // State Variable
  type TabKey = "frontend" | "admin" | "backend";
  const [selectedTab, setSelectedTab] = useState<TabKey>("frontend");

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

      <section id="about-company" >
        <div className="bg-gradient-to-tl from-muted/60 via-muted/60 to-muted/20 p-6 sm:p-8">
          {/* Header */}
          <div className="max-w-xl mx-auto text-center py-20">
            <div className="relative after:absolute after:-bottom-5 after:h-1 after:w-1/2 after:bg-foreground after:left-0 after:right-0 after:mx-auto after:rounded-full">
              <h2 className="text-foreground text-4xl font-bold !leading-tight">Discover Beehive Application</h2>
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

          {/* Blog */}
          <div className="p-8 tracking-wide max-w-7xl max-lg:max-w-2xl max-lg:mx-auto">
            <div className="grid items-center grid-cols-1 lg:grid-cols-5 gap-8">
              <div className="lg:col-span-3">
                <div className="grid sm:grid-cols-3 gap-2 text-center">
                  <div className="sm:col-span-2 bg-muted-foreground p-4 flex items-center rounded-sm">
                    <img src="https://picsum.photos/200/300.webp?random=45" alt="Product" className="w-full aspect-[5/4] object-contain object-top" />
                  </div>

                  <div className="sm:space-y-2 w-full h-full max-sm:grid max-sm:grid-cols-2 max-sm:gap-2">
                    <div className="bg-muted-foreground p-4 flex items-center rounded-sm w-full h-[140px] sm:h-[200px]">
                      <img src="https://picsum.photos/200/300.webp?random=46" alt="Product" className="w-full max-h-full object-contain object-top" />
                    </div>

                    <div className="bg-muted-foreground p-4 flex items-center rounded-sm w-full h-[140px] sm:h-[200px]">
                      <img src="https://picsum.photos/200/300.webp?random=47" alt="Product" className="w-full max-h-full object-contain object-top" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:col-span-2">
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-foreground">
                    🧱 The Three Pillars of Beehive
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                    Beehive Corporation is structured around three core applications:
                  </p>

                  <ul className="space-y-2 list-disc my-2 pl-4 text-sm text-muted-foreground">
                    <li>Frontend Application – The public-facing experience</li>
                    <li>Admin Application – Internal control, content, and operations</li>
                    <li>Backend Application – The brain powering logic, data, and communication</li>
                  </ul>
                    
                  <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                    Each app is independently deployable, yet designed to feel like one organism.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 w-full lg:w-11/13">
              <ul className="flex flex-col lg:flex-row border-b border-muted-foreground">
                <li
                  className={tabClass("frontend")}
                  onClick={() => setSelectedTab("frontend")}
                >
                  🌐 Frontend Application
                </li>
                <li 
                  className={tabClass("admin")}
                  onClick={() => setSelectedTab("admin")}
                >
                  🧠 Admin Application
                </li>
                <li 
                  className={tabClass("backend")}
                  onClick={() => setSelectedTab("backend")}
                >
                  🧩 Backend Application
                </li>
              </ul>

                {selectedTab === "frontend" && (
                  <div id="frontend-application" >
                    <div className="mt-8">
                      <h3 className="text-lg font-semibold text-foreground">Frontend Application</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mt-4">Step up your footwear game with our premium men's shoes. Designed for comfort and crafted with a contemporary aesthetic, these versatile shoes are a must-have addition to your wardrobe. The supple and breathable materials ensure all-day comfort, making them perfect for everyday wear.</p>
                    </div>

                    <ul className="space-y-3 list-disc mt-6 pl-4 text-sm text-muted-foreground">
                      <li>A pair of gray shoes is a wardrobe essential due to its versatility.</li>
                      <li>Available in a wide range of sizes, from extra small to extra large, and even in tall and petite sizes.</li>
                      <li>Easy to maintain, they can be machine-washed and dried on low heat.</li>
                      <li>Personalize them with your own designs, patterns, or embellishments to make them uniquely yours.</li>
                    </ul>
                  </div>
                )}
                            
                {selectedTab === "admin" && (
                  <div id="admin-application" >
                    <div className="mt-8">
                      <h3 className="text-lg font-semibold text-foreground">Admin Application</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mt-4">Step up your footwear game with our premium men's shoes. Designed for comfort and crafted with a contemporary aesthetic, these versatile shoes are a must-have addition to your wardrobe. The supple and breathable materials ensure all-day comfort, making them perfect for everyday wear.</p>
                    </div>

                    <ul className="space-y-3 list-disc mt-6 pl-4 text-sm text-muted-foreground">
                      <li>A pair of gray shoes is a wardrobe essential due to its versatility.</li>
                      <li>Available in a wide range of sizes, from extra small to extra large, and even in tall and petite sizes.</li>
                      <li>Easy to maintain, they can be machine-washed and dried on low heat.</li>
                      <li>Personalize them with your own designs, patterns, or embellishments to make them uniquely yours.</li>
                    </ul>
                  </div>
                )}
                            
                {selectedTab === "backend" && (
                  <div id="backend-application" >
                      <div className="mt-8">
                        <h3 className="text-lg font-semibold text-foreground">Backend Application</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mt-4">Step up your footwear game with our premium men's shoes. Designed for comfort and crafted with a contemporary aesthetic, these versatile shoes are a must-have addition to your wardrobe. The supple and breathable materials ensure all-day comfort, making them perfect for everyday wear.</p>
                      </div>

                      <ul className="space-y-3 list-disc mt-6 pl-4 text-sm text-muted-foreground">
                        <li>A pair of gray shoes is a wardrobe essential due to its versatility.</li>
                        <li>Available in a wide range of sizes, from extra small to extra large, and even in tall and petite sizes.</li>
                        <li>Easy to maintain, they can be machine-washed and dried on low heat.</li>
                        <li>Personalize them with your own designs, patterns, or embellishments to make them uniquely yours.</li>
                      </ul>
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

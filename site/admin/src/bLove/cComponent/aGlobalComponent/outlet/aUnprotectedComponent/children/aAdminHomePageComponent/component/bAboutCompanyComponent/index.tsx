import React from 'react'
import { AboutCompanyComponentDataType } from '../../';

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";


type AboutCompanyComponentType = {
  reduxCall: any,
  apiResponse: {
    truly: AboutCompanyComponentDataType;
    relatively: AboutCompanyComponentDataType;
  },
}

const AboutCompanyComponent = (props: AboutCompanyComponentType) => {
  // Destructure Props
  const { apiResponse } = props;

  // JSX
  return (
    <React.Fragment>
      {/* AboutCompanyComponent */}

      {/* <div className="py-8" >
        <p className="font-myPrimaryFont text-2xl" >
          Truly About Company Section
        </p>
        <p className="font-mySecondaryFont text-sm" >
          Image: {apiResponse.truly.aImage}
        </p>
        <p className="font-mySecondaryFont text-sm" >
          Title: {apiResponse.truly.aTitle}
        </p>
        <p className="font-mySecondaryFont text-sm" >
          Subtitle: {apiResponse.truly.aSubtitle}
        </p>
        <p className="font-mySecondaryFont text-sm" >
          Description: {apiResponse.truly.aDescription}
        </p>
        <p className="font-mySecondaryFont text-sm" >
          Tag: {apiResponse.truly.dTag}
        </p>
      </div> */}

      {/* <div className="py-8" >
        <p className="font-myPrimaryFont text-2xl" >
          Relatively About Company Section
        </p>
        <p className="font-mySecondaryFont text-sm" >
          Image: {apiResponse.relatively.aImage}
        </p>
        <p className="font-mySecondaryFont text-sm" >
          Title: {apiResponse.relatively.aTitle}
        </p>
        <p className="font-mySecondaryFont text-sm" >
          Subtitle: {apiResponse.relatively.aSubtitle}
        </p>
        <p className="font-mySecondaryFont text-sm" >
          Description: {apiResponse.relatively.aDescription}
        </p>
        <p className="font-mySecondaryFont text-sm" >
          Tag: {apiResponse.relatively.dTag}
        </p>
      </div> */}

      <section id="about-company" >
        <div className="bg-gradient-to-tl from-muted/100 via-muted/50 to-muted/0 p-6 sm:p-8">
          {/* Header */}
          <div className="max-w-xl mx-auto text-center py-20">
            <div className="relative after:absolute after:-bottom-5 after:h-1 after:w-1/2 after:bg-foreground after:left-0 after:right-0 after:mx-auto after:rounded-full">
              <h2 className="text-foreground text-4xl font-bold !leading-tight uppercase">About Company</h2>
            </div>
            <div className="mt-12">
              <p className="text-muted-foreground text-base leading-relaxed">
                An overview that introduces what the entity represents, how it is structured, and 
                the broader idea behind its existence.
              </p>
            </div>
          </div>

          {/* Truly */}
          <div className="bg-muted relative lg:max-w-6xl max-w-3xl mx-auto rounded-sm mb-20 border border-muted-foreground">
            <div className="grid lg:grid-cols-2 w-full h-full">
              <div className="p-4 relative max-lg:hidden overflow-hidden">
                <div className="w-full">
                  <img src="https://readymadeui.com/images/payment-img.webp" className="object-contain w-5/6 h-full absolute top-10 left-0 right-0 m-auto" alt="img" />
                </div>
              </div>
              <div 
                className="
                  flex flex-col items-end justify-center text-right px-8 py-8 
                  relative bg-background/60 rounded-tl-[206px] z-20 
                  before:absolute before:inset-0 before:!left-auto 
                  before:bg-background/50 before:w-2/3 before:rounded-bl-[206px] before:-z-10
                "
              >
                <h3 className="font-bold md:text-3xl text-2xl text-foreground uppercase">
                  {apiResponse.truly.aTitle}
                </h3>
                <p className="text-sm text-muted-foreground mt-10">
                  <article 
                    className="
                      prose max-w-none dark:prose-invert prose-headings:font-bold text-sm
                      prose-li:marker:text-foreground leading-normal text-muted-foreground
                    "
                  >
                    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} >
                      {apiResponse.truly.aDetail}
                    </ReactMarkdown>
                  </article>
                </p>
              </div>
            </div>
          </div>
          
          {/* Relatively */}
          <div className="bg-muted relative lg:max-w-6xl max-w-3xl mx-auto rounded-sm my-20 border border-muted-foreground">
            <div className="grid lg:grid-cols-2 w-full h-full">
              <div 
                className="
                  flex flex-col items-start justify-center text-left px-8 py-8
                  relative bg-background/60 rounded-tr-[206px] z-20 
                  before:absolute before:inset-0 before:!right-auto 
                  before:bg-background/50 before:w-2/3 before:rounded-br-[206px] before:-z-10
                "
              >
                <h3 className="font-bold md:text-3xl text-2xl text-foreground uppercase">
                  {apiResponse.relatively.aTitle}
                </h3>
                <p className="text-sm text-muted-foreground mt-10">
                  <article 
                    className="
                      prose max-w-none dark:prose-invert prose-headings:font-bold text-sm 
                      prose-li:marker:text-foreground leading-normal text-muted-foreground
                    "
                  >
                    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} >
                      {apiResponse.relatively.aDetail}
                    </ReactMarkdown>
                  </article>
                </p>
              </div>
              <div className="p-4 relative max-lg:hidden overflow-hidden">
                <div className="w-full">
                  <img src="https://readymadeui.com/images/payment-img.webp" className="object-contain w-5/6 h-full absolute top-10 left-0 right-0 m-auto" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default AboutCompanyComponent;

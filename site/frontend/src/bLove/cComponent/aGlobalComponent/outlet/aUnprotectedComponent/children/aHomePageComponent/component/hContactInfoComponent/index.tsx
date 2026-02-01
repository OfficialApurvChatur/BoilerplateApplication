import React from 'react'
import { ContactInfoComponentDataType } from '../..';

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";


type ContactInfoComponentType = {
  reduxCall: any,
  apiResponse: ContactInfoComponentDataType,
}

const ContactInfoComponent = (props: ContactInfoComponentType) => {
  // Destructure Props
  const { apiResponse } = props;

  // JSX
  return (
    <React.Fragment>
      {/* ContactInfoComponent */}

      {/* <div className="py-8" >
        <p className="font-myPrimaryFont text-2xl" >
          Contact Info Section
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
      </div> */}

      <section id="contact" >
        <div className="bg-gradient-to-tl from-muted/100 via-muted/50 to-muted/0 p-6 sm:p-8">
          {/* Header */}
          <div className="max-w-xl mx-auto text-center py-20">
            <div className="relative after:absolute after:-bottom-5 after:h-1 after:w-1/2 after:bg-foreground after:left-0 after:right-0 after:mx-auto after:rounded-full">
              <h2 className="text-foreground text-4xl font-bold !leading-tight uppercase">Our Contact</h2>
            </div>
            <div className="mt-12">
              <p className="text-muted-foreground text-base">
                This section provides ways to connect, communicate, and 
                reach out for inquiries, collaborations, or support.
              </p>
            </div>
          </div>

          <div className="max-w-7xl max-lg:max-w-3xl mx-auto p-4 md:p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="bg-muted rounded-lg p-8 border border-muted-foreground">
                <h2 className="text-3xl font-bold text-foreground mb-4 uppercase">Get in touch</h2>
                <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                  Feel free to contact us anytime with your questions or ideas, and 
                  our team will get back to you as soon as possible with the right support.
                </p>

                <div className="space-y-6">
                  <div>
                    <label className="text-foreground text-sm font-medium mb-2 block">Name</label>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-muted-foreground text-sm text-foreground focus:border-muted-foreground outline-0"
                    />
                  </div>
                  <div>
                    <label className="text-foreground text-sm font-medium mb-2 block">Email</label>
                    <input
                      type="email"
                      placeholder="E-mail"
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-muted-foreground text-sm text-foreground focus:border-muted-foreground outline-0"
                    />
                  </div>
                  <div>
                    <label className="text-foreground text-sm font-medium mb-2 block">Message</label>
                    <textarea
                      placeholder="Message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-muted-foreground text-sm text-foreground focus:border-muted-foreground outline-0"
                    ></textarea>
                  </div>
                  <button
                    type="button"
                    className="w-full text-sm bg-foreground hover:bg-foretext-foreground text-muted font-medium py-3 px-6 rounded-lg transition-colors border-0 cursor-pointer"
                  >
                    Send message
                  </button>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-muted rounded-lg p-6 shadow-sm border border-muted-foreground">
                  <h3 className="text-3xl font-bold text-foreground mb-6 uppercase">Contact Information</h3>

                  <div className="space-y-6">
                    <p className="text-sm text-muted-foreground">
                      <article 
                        className="
                          prose max-w-none dark:prose-invert prose-headings:font-bold text-sm 
                          prose-li:marker:text-foreground leading-normal text-muted-foreground
                        "
                      >
                        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} >
                          {apiResponse.aDetail}
                        </ReactMarkdown>
                      </article>
                    </p>
                  </div>
                </div>

                <div className="bg-muted rounded-lg p-6 shadow-sm border border-muted-foreground">
                  <h3 className="text-3xl font-bold text-foreground mb-6 uppercase">Hours of Operation</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between gap-4 flex-wrap">
                      <span className="text-muted-foreground text-sm">Monday - Friday</span>
                      <span className="text-foreground text-sm">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between gap-4 flex-wrap">
                      <span className="text-muted-foreground text-sm">Saturday</span>
                      <span className="text-foreground text-sm">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between gap-4 flex-wrap">
                      <span className="text-muted-foreground text-sm">Sunday</span>
                      <span className="text-foreground text-sm">Closed</span>
                    </div>
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

export default ContactInfoComponent;

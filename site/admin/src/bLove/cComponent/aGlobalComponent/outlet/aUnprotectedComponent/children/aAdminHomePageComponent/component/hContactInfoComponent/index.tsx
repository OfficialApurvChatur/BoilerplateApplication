import React from 'react'
import { ContactInfoComponentDataType } from '../..';


type ContactInfoComponentType = {
  reduxCall: any,
  apiResponse: ContactInfoComponentDataType,
}

const ContactInfoComponent = (props: ContactInfoComponentType) => {
  // Destructure Props
  const {  } = props;

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

          <div className="max-w-7xl max-lg:max-w-3xl mx-auto p-4 md:p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="bg-muted rounded-lg p-8 border border-muted-foreground">
                <h2 className="text-3xl font-bold text-foreground mb-4">Get in touch</h2>
                <p className="text-muted-foreground text-[15px] mb-8 leading-relaxed">Feel free to contact us and we will get back to you as soon as possible</p>

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
                  <h3 className="text-xl font-semibold text-foreground mb-8">Contact Information</h3>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-foreground" viewBox="0 0 64 64">
                        <path d="M32 0A24.032 24.032 0 0 0 8 24c0 17.23 22.36 38.81 23.31 39.72a.99.99 0 0 0 1.38 0C33.64 62.81 56 41.23 56 24A24.032 24.032 0 0 0 32 0zm0 35a11 11 0 1 1 11-11 11.007 11.007 0 0 1-11 11z" data-original="#000000" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm mb-2">Our Location</h4>
                        <p className="text-muted-foreground text-sm">123 Business Street</p>
                        <p className="text-muted-foreground text-[13px] mt-0.5">New York, NY 10001</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-foreground" viewBox="0 0 513.64 513.64">
                        <path d="m499.66 376.96-71.68-71.68c-25.6-25.6-69.12-15.359-79.36 17.92-7.68 23.041-33.28 35.841-56.32 30.72-51.2-12.8-120.32-79.36-133.12-133.12-7.68-23.041 7.68-48.641 30.72-56.32 33.28-10.24 43.52-53.76 17.92-79.36l-71.68-71.68c-20.48-17.92-51.2-17.92-69.12 0L18.38 62.08c-48.64 51.2 5.12 186.88 125.44 307.2s256 176.641 307.2 125.44l48.64-48.64c17.921-20.48 17.921-51.2 0-69.12z" data-original="#000000" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm mb-2">Phone Number</h4>
                        <p className="text-muted-foreground text-[13px]">+1 (555) 123-4567</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-foreground" viewBox="0 0 512 512">
                        <path d="M298.789 313.693c-12.738 8.492-27.534 12.981-42.789 12.981-15.254 0-30.05-4.489-42.788-12.981L3.409 173.82A76.269 76.269 0 0 1 0 171.403V400.6c0 26.278 21.325 47.133 47.133 47.133h417.733c26.278 0 47.133-21.325 47.133-47.133V171.402a75.21 75.21 0 0 1-3.416 2.422z" data-original="#000000" />
                        <path d="m20.05 148.858 209.803 139.874c7.942 5.295 17.044 7.942 26.146 7.942 9.103 0 18.206-2.648 26.148-7.942L491.95 148.858c12.555-8.365 20.05-22.365 20.05-37.475 0-25.981-21.137-47.117-47.117-47.117H47.117C21.137 64.267 0 85.403 0 111.408a44.912 44.912 0 0 0 20.05 37.45z" data-original="#000000" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm mb-2">Email Address</h4>
                        <p className="text-muted-foreground text-[13px]">contact@business.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-muted rounded-lg p-6 shadow-sm border border-muted-foreground">
                  <h3 className="text-xl font-semibold text-foreground mb-8">Hours of Operation</h3>
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

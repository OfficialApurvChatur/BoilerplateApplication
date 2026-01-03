import React from "react";

import { InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";


const FooterComponent = () => {
  return (
    <React.Fragment>
      {/* FooterComponent */}


      <footer className="bg-muted text-foreground pt-12 pb-6 px-4 tracking-wide">
        <div className="text-center">
          <ul className="flex gap-x-8 gap-y-3 justify-center flex-wrap">
            <li><a href="javascript:void(0)" className="text-[15px] text-muted-foreground hover:text-foreground">Terms of Service</a></li>
            <li><a href="javascript:void(0)" className="text-[15px] text-muted-foreground hover:text-foreground">Privacy Policy</a></li>
            <li><a href="javascript:void(0)" className="text-[15px] text-muted-foreground hover:text-foreground">Contact</a></li>
            <li><a href="javascript:void(0)" className="text-[15px] text-muted-foreground hover:text-foreground">Company</a></li>
          </ul>

          <div className="mt-12">
            <h6 className="text-[15px] text-muted-foreground">Stay connected with us:</h6>

            <ul className="flex flex-wrap justify-center gap-x-6 ga-y-3 gap-4 mt-6">
              <li>
                <a href='javascript:void(0)'>
                  <LinkedInLogoIcon className="h-8 w-8" />
                </a>
              </li>
              <li>
                <a href='javascript:void(0)'>
                  <TwitterLogoIcon className="h-8 w-8" />
                </a>
              </li>
              <li>
                <a href='javascript:void(0)'>
                  <InstagramLogoIcon className="h-8 w-8" />
                </a>
              </li>
              <li>
                <a href='javascript:void(0)'>
                  <TwitterLogoIcon className="h-8 w-8" />
                </a>
              </li>
            </ul>
          </div>

          <div className="border-t border-muted-foreground pt-6 mt-12">
            <p className="text-[15px] text-muted-foreground">© ReadymadeUI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default FooterComponent;

import React from "react"

import { NavbarComponent } from "./component/aNavbarComponent";
import { FooterComponent } from './component/bFooterComponent';
import { ScrollToTopComponent } from './component/cScrollToTopComponent';


const UnprotectedComponent = ({ children, reduxCall, apiHandler }: { children: React.ReactNode, reduxCall: any, apiHandler: any }) => {
  // JSX
  return (
    <React.Fragment>
      {/* UnprotectedComponent */}

      <div className="overflow-hidden" >
        <NavbarComponent reduxCall={reduxCall} apiHandler={apiHandler} />
        { children }
        <FooterComponent />
        <ScrollToTopComponent />
      </div>
    </React.Fragment>
  )
}

export default UnprotectedComponent;

import React from "react"

import { NavbarComponent } from "./component/aNavbarComponent";
import { FooterComponent } from './component/bFooterComponent';
import { ScrollToTopComponent } from './component/cScrollToTopComponent';


const UnprotectedComponent = ({ children, ReduxCall, APICall, submitHandler }: { children: React.ReactNode, ReduxCall: any, APICall: any, submitHandler: any }) => {
  // JSX
  return (
    <React.Fragment>
      {/* UnprotectedComponent */}

      <div className="overflow-hidden" >
        <NavbarComponent ReduxCall={ReduxCall} APICall={APICall} submitHandler={submitHandler} />
        { children }
        <FooterComponent />
        <ScrollToTopComponent />
      </div>
    </React.Fragment>
  )
}

export default UnprotectedComponent;

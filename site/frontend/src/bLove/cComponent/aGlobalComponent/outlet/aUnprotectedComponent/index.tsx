import React from "react"

import { FooterComponent } from './component/bFooterComponent';
import { ScrollToTopComponent } from './component/cScrollToTopComponent';
import { ResizeableNavbarComponent } from "./component/dResizeableNavbarComponent";


const UnprotectedComponent = ({ children, reduxCall, apiHandler }: { children: React.ReactNode, reduxCall: any, apiHandler: any }) => {
  // JSX
  return (
    <React.Fragment>
      {/* UnprotectedComponent */}

      <div className="relative w-full" >
        <ResizeableNavbarComponent reduxCall={reduxCall} apiHandler={apiHandler} />
        { children }
        <FooterComponent />
        <ScrollToTopComponent />
      </div>
    </React.Fragment>
  )
}

export default UnprotectedComponent;

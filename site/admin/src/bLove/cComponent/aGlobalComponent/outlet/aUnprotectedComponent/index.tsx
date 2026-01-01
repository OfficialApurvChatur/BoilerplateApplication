import React from "react"

import NavbarComponent from "./component/aNavbarComponent";
import FooterComponent from './component/bFooterComponent';
import ScrollToTopComponent from './component/cScrollToTopComponent';


const UnprotectedComponent = ({ children, apiHandler, reduxCall }: { children: React.ReactNode, reduxCall: any, apiHandler: any }) => {
  // JSX
  return (
    <React.Fragment>
      {/* UnprotectedComponent */}

      <div className="relative w-full" >
        <NavbarComponent 
          apiHandler={apiHandler}
          reduxCall={reduxCall}
        />
        { children }
        <FooterComponent />
        <ScrollToTopComponent />
      </div>
    </React.Fragment>
  )
}

export default UnprotectedComponent;

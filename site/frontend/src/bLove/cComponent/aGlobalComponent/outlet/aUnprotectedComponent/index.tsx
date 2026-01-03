import React from "react"

import NavbarComponent from "./component/aNavbarComponent";
import FooterComponent from './component/bFooterComponent';
import ScrollToTopComponent from './component/cScrollToTopComponent';


const UnprotectedComponent = ({ children, apiHandler, reduxCall }: { children: React.ReactNode, reduxCall: any, apiHandler: any }) => {
  // JSX
  return (
    <React.Fragment>
      {/* UnprotectedComponent */}

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap');

          .unprotected-scope,
          .unprotected-scope * {
            font-family: 'Roboto Slab', serif;
          }
        `}
      </style>

      <div className="relative w-full unprotected-scope" >
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

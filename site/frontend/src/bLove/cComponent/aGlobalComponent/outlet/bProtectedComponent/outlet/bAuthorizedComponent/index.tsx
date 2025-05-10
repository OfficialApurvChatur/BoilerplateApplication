import React from "react"


const AuthorizedComponent = ({ children }: { children: React.ReactNode, ReduxCall: any, APICall: any, submitHandler: any }) => {
  // JSX
  return (
    <React.Fragment>
      {/* AuthorizedComponent */}
      { children }
    </React.Fragment>
  )
}

export default AuthorizedComponent;

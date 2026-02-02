import React from 'react'
import Logo from "@/bLove/hAsset/HeroBanner/Logo.png";


const LoaderComponent = (props: any) => {
  // JSX
  return (
    <React.Fragment>
      {/* LoaderComponent */}
      <div className="flex flex-col justify-center items-center min-h-screen" >
        <img
          src={Logo}
          alt="Logo"
          className="mx-auto mb-4 h-24 w-auto object-contain"
        />

        <span>{props.message || "Loading! Please wait..."}</span>
      </div>
    </React.Fragment>
  )
}

export default LoaderComponent;

import React from 'react'
import { LoaderFive } from '@/aConnection/bShadcnConnection/components/ui/loader';


const LoaderComponent = () => {
  // JSX
  return (
    <React.Fragment>
      {/* LoaderComponent */}
      <div className="flex justify-center items-center h-96" >
        <LoaderFive text="Loading! Please wait..." />
      </div>
    </React.Fragment>
  )
}

export default LoaderComponent;

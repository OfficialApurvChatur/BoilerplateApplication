import React from 'react'


const UnauthorizedAccessComponent = () => {
  // JSX
  return (
    <React.Fragment>
      {/* UnauthorizedAccessComponent */}

      <div className="w-full h-full flex justify-center items-center text-center text-rose-400" >
        You are not authorized to access this route. <br />
        Please contact Admin.
      </div>

    </React.Fragment>
  )
}

export default UnauthorizedAccessComponent;

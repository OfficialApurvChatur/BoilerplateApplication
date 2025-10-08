import React from 'react'

import LoaderComponent from '@/bLove/cComponent/aGlobalComponent/component/aLoaderComponent';
import ErrorComponent from '@/bLove/cComponent/aGlobalComponent/component/bErrorComponent';

import { AboutComponent } from './component/dAboutComponent';


type AdminAboutPageComponentType = {
  reduxCall: any,
  apiCall: any,
}

const AdminAboutPageComponent = (props: AdminAboutPageComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AdminAboutPageComponent */}

      {
        (props.apiCall.listAPIResponse.isLoading || props.apiCall.listAPIResponse.isFetching) ? <LoaderComponent /> : 
        (props.apiCall.listAPIResponse.isError) ? <ErrorComponent message="Error..." /> :
        (props.apiCall.listAPIResponse.isSuccess) ? (
          (props.apiCall.listAPIResponse.data.success) ? (
            <React.Fragment>
              <div className="overflow-hidden" >
                <AboutComponent reduxCall={props.reduxCall} apiCall={props.apiCall} />
              </div>
            </React.Fragment>
          ) : []
        ) : []
      }

    </React.Fragment>
  )
}

export default AdminAboutPageComponent;

import React from 'react'

import LoaderComponent from '@/bLove/cComponent/aGlobalComponent/component/aLoaderComponent';
import ErrorComponent from '@/bLove/cComponent/aGlobalComponent/component/bErrorComponent';

import { AboutComponent } from './component/dAboutComponent';


type AdminAboutPageComponentType = {
  ReduxCall: any,
  APICall: any,
}

const AdminAboutPageComponent = (props: AdminAboutPageComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AdminAboutPageComponent */}

      {
        (props.APICall.listAPIResponse.isLoading || props.APICall.listAPIResponse.isFetching) ? <LoaderComponent /> : 
        (props.APICall.listAPIResponse.isError) ? <ErrorComponent message="Error..." /> :
        (props.APICall.listAPIResponse.isSuccess) ? (
          (props.APICall.listAPIResponse.data.success) ? (
            <React.Fragment>
              <div className="overflow-hidden" >
                <AboutComponent ReduxCall={props.ReduxCall} APICall={props.APICall} />
              </div>
            </React.Fragment>
          ) : []
        ) : []
      }

    </React.Fragment>
  )
}

export default AdminAboutPageComponent;

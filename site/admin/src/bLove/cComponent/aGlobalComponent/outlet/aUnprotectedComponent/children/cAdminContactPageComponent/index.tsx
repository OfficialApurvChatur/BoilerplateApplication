import React from 'react'

import { ContactFormComponent } from './component/aContactFormComponent';


type AdminContactPageComponentType = {
  ReduxCall: any,
  APICall: any,
}

const AdminContactPageComponent = (props: AdminContactPageComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AdminContactPageComponent */}

      <div className="overflow-hidden" >
        <ContactFormComponent />
      </div>
    </React.Fragment>
  )
}

export default AdminContactPageComponent;

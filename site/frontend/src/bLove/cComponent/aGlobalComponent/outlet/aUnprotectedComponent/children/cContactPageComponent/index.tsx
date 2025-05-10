import React from 'react'

import { ContactFormComponent } from './component/aContactFormComponent';


type ContactPageComponentType = {
  ReduxCall: any,
  // APICall: any,
}

const ContactPageComponent = (props: ContactPageComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* ContactPageComponent */}

      <div className="overflow-hidden" >
        <ContactFormComponent />
      </div>
    </React.Fragment>
  )
}

export default ContactPageComponent;

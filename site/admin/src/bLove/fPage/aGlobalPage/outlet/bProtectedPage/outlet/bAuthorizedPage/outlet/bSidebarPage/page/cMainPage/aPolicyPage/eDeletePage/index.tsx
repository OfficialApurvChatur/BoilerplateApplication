import React from "react";
import { useParams } from "react-router-dom";

import PolicyDeleteComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/bSidebarComponent/children/cMainComponent/aPolicyComponent/eDeleteComponent";

import fullRoute from "@/bLove/gRoute/bFullRoute";


const extras = {
  header: ({ id }: { id: string }) => ({
    title: "Policy Delete",
    subtitle: "This is just some subtitle for the policy delete...",
    buttons: [
      { text: "Update", to: `${fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cMainRoute.bPolicyRoute.dUpdateRoute}/${id}` },
    ]
  }),
  
  data: [
    // Basic Information
    {
      display: true,
      title: "Basic Information",
      subtitle: "This is just some subtitle for the basic information...",
      fields: [
        { label: "Title", type: "text", value: "This is the value of Title..." },
        { label: "Title", type: "text", value: "This is the value of Title..." },
        { label: "Title", type: "text", value: "This is the value of Title..." },
        { label: "Title", type: "text", value: "This is the value of Title..." },
        { label: "Title", type: "text", value: "This is the value of Title..." },
        { label: "Title", type: "text", value: "This is the value of Title..." },
      ],  
    },

    // Personal Information
    {
      display: true,
      title: "Personal Information",
      subtitle: "This is just some subtitle for the personal information...",
      fields: [
        { label: "Title", type: "text", value: "This is the value of Title..." },
        { label: "Title", type: "text", value: "This is the value of Title..." },
        { label: "Title", type: "text", value: "This is the value of Title..." },
        { label: "Title", type: "text", value: "This is the value of Title..." },
        { label: "Title", type: "text", value: "This is the value of Title..." },
        { label: "Title", type: "text", value: "This is the value of Title..." },
      ],  
    },

    // Relation Information
    {
      display: true,
      title: "Relation Information",
      subtitle: "This is just some subtitle for the relation information...",
      fields: [
        { label: "Title", type: "text", value: "This is the value of Title..." },
        { label: "Title", type: "text", value: "This is the value of Title..." },
        { label: "Title", type: "text", value: "This is the value of Title..." },
        { label: "Title", type: "text", value: "This is the value of Title..." },
        { label: "Title", type: "text", value: "This is the value of Title..." },
        { label: "Title", type: "text", value: "This is the value of Title..." },
      ],  
    },

    // More Information
    {
      display: true,
      title: "More Information",
      subtitle: "This is just some subtitle for the more information...",
      fields: [
        { label: "Title", type: "text", value: "This is the value of Title..." },
        { label: "Title", type: "text", value: "This is the value of Title..." },
        { label: "Title", type: "text", value: "This is the value of Title..." },
        { label: "Title", type: "text", value: "This is the value of Title..." },
        { label: "Title", type: "text", value: "This is the value of Title..." },
        { label: "Title", type: "text", value: "This is the value of Title..." },
      ],  
    },

    // Critical Information
    {
      display: true,
      title: "Critical Information",
      subtitle: "This is just some subtitle for the critical information...",
      fields: [
        { label: "Title", type: "text", value: "This is the value of Title..." },
        { label: "Title", type: "text", value: "This is the value of Title..." },
        { label: "Title", type: "text", value: "This is the value of Title..." },
        { label: "Title", type: "text", value: "This is the value of Title..." },
        { label: "Title", type: "text", value: "This is the value of Title..." },
        { label: "Title", type: "text", value: "This is the value of Title..." },
      ],  
    },

  ],
}

const PolicyDeletePage = () => {
  // Variable
  const { id } = useParams();

  // JSX
  return (
    <React.Fragment>
      {/* PolicyDeletePage */}
      <PolicyDeleteComponent
        header={extras.header({ id: (id as string) })} 
        data={extras.data} 
        params={{ id: id }}
      />
    </React.Fragment>
  )
}

export default PolicyDeletePage;

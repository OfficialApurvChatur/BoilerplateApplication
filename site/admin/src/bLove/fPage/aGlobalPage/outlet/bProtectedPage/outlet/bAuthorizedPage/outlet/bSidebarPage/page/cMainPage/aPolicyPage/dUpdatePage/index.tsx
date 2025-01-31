import React from "react";
import { useParams } from "react-router-dom";
import { z } from "zod";

import PolicyUpdateComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/bSidebarComponent/children/cMainComponent/aPolicyComponent/dUpdateComponent";

import fullRoute from "@/bLove/gRoute/bFullRoute";


const extras = {
  header: ({ id }: { id: string }) => ({
    title: "Policy Update",
    subtitle: "This is just some subtitle for the data-form-one...",
    buttons: [
      { text: "Delete", to: `${fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cMainRoute.bPolicyRoute.eDeleteRoute}/${id}` },
    ]
  }),

  data: [
    // Basic Information
    {
      display: true,
      title: "Basic Information",
      subtitle: "This is just some subtitle for the basic information...",
      inputs: [
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
      ],  
    },

    // Personal Information
    {
      display: true,
      title: "Personal Information",
      subtitle: "This is just some subtitle for the personal information...",
      inputs: [
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
      ],  
    },

    // Relation Information
    {
      display: true,
      title: "Relation Information",
      subtitle: "This is just some subtitle for the relation information...",
      inputs: [
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
      ],  
    },

    // More Information
    {
      display: true,
      title: "More Information",
      subtitle: "This is just some subtitle for the more information...",
      inputs: [
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
      ],  
    },

    // Critical Information
    {
      display: true,
      title: "Critical Information",
      subtitle: "This is just some subtitle for the critical information...",
      inputs: [
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
      ],  
    },
  ],

  formSchema: z.object({
    aTitle: z.string()
      .min(3, { message: "Please enter atlest 3 characters" })
      .max(50, { message: "Please enter atmost 50 characters" }),
  }),

  formDefaultValue: {
    aTitle: "This is the previous value of tilte...",
  },
}

const PolicyUpdatePage = () => {
  // Variable
  const { id } = useParams();

  // JSX
  return (
    <React.Fragment>
      {/* PolicyUpdatePage */}
      <PolicyUpdateComponent 
        header={extras.header({ id: (id as string) })} 
        data={extras.data} 
        formSchema={extras.formSchema} 
        formDefaultValue={extras.formDefaultValue} 
        params={{ id: id }}
      />
    </React.Fragment>
  )
}

export default PolicyUpdatePage;

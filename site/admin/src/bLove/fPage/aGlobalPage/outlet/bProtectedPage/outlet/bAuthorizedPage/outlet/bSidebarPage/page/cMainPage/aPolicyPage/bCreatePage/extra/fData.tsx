const data = () => ([
  // Basic Information
  {
    display: true,
    title: "Basic Information",
    subtitle: "This is just some subtitle for the basic information...",
    inputs: [
      { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
    ],  
  },

  // Personal Information
  {
    display: false,
    title: "Personal Information",
    subtitle: "This is just some subtitle for the personal information...",
    inputs: [],  
  },

  // Relation Information
  {
    display: false,
    title: "Relation Information",
    subtitle: "This is just some subtitle for the relation information...",
    inputs: [],  
  },

  // More Information
  {
    display: true,
    title: "More Information",
    subtitle: "This is just some subtitle for the more information...",
    inputs: [
      { name: "dPolicyNumber", label: "Policy Number", type: "text", placeholder: "Please enter policy number..." },
      { name: "dPolicyType", label: "Policy Type", type: "text", placeholder: "Please enter policy type..." },
      { name: "dPolicyStartDate", label: "Policy Start Date", type: "date" },
      { name: "dPolicyEndDate", label: "Policy End Date", type: "date" },
      { name: "dPremiumAmount", label: "Premium Amount", type: "number", placeholder: "Please enter premium amount..." },
      { name: "dDeductibleAmount", label: "Deductible Amount", type: "number", placeholder: "Please enter deductible amount..." },
      { name: "dCoverageDetails", label: "Coverage Details", type: "text", placeholder: "Please enter coverage details..." },
    ],  
  },

  // Critical Information
  {
    display: false,
    title: "Critical Information",
    subtitle: "This is just some subtitle for the critical information...",
    inputs: [],  
  },
])

export default data;

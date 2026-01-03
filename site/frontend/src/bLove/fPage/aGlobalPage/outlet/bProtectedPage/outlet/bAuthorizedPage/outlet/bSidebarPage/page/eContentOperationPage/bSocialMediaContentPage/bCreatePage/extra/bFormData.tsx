const formData = () => ([
  // Basic Information
  {
    display: true,
    title: "Basic Information",
    subtitle: "This is just some subtitle for the basic information...",
    inputs: [
      { name: "aImage", label: "Image", type: "image", folderName: "socialmediacontent" },
      { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
      { name: "aSubtitle", label: "Subtitle", type: "text", placeholder: "Please enter subtitle..." },
      { name: "aDescription", label: "Description", type: "text-box", placeholder: "Please enter description..." },
      { name: "aDetail", label: "Detail", type: "rich-text-editor", placeholder: "Please enter detail..." },
      { name: "aStatus", label: "Status", type: "radio",
        options: [
          { value: "Active", label: "Active" },
          { value: "Inactive", label: "Inactive" },
        ]
      },
      { name: "aState", label: "State", type: "select", placeholder: "Please select state...",
        options: [
          { value: "State 1", label: "State 1" },
          { value: "State 2", label: "State 2" },
          { value: "State 3", label: "State 3" },
        ]
      },
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
    display: false,
    title: "More Information",
    subtitle: "This is just some subtitle for the more information...",
    inputs: [],  
  },

  // Critical Information
  {
    display: false,
    title: "Critical Information",
    subtitle: "This is just some subtitle for the critical information...",
    inputs: [],  
  },
])

export default formData;

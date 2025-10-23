import formValueDefault from "./dFormValueDefault";

const formData = () => ([
  // Basic Information
  {
    display: true,
    title: "Basic Information",
    subtitle: "This is just some subtitle for the basic information...",
    inputs: [
      { name: "aImage", label: "Image", type: "image", folderName: "aboutapplication" },
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
    display: true,
    title: "More Information",
    subtitle: "This is just some subtitle for the more information...",
    inputs: [
      {
        label: "Tech Icon",
        type: "dynamic-input",
        name: "dTechIcon",
        children: {
          label: "Tech Icon",
          type: "object-array-input",
          inputType: "text-input",
          inputs: formValueDefault?.dTechIcon,
          // onChange: () => console.log("Handle Change"),
          onAdd: ({ form, fieldName, inputs }: any) => {
            const updated = [
              ...inputs,
              {
                aIconLabel: "MongoDBIcon:ExpressIcon:ReactIcon:NodeIcon",
                bIconValue: "MongoDB:Express.js:React.js:Node.js",
              },
            ];
            form.setValue(fieldName, updated, { shouldValidate: true });
          },
          onRemove: ({ form, fieldName, inputs, index }: any) => {
            const updated = inputs.filter((_: any, i: number) => i !== index);
            form.setValue(fieldName, updated, { shouldValidate: true });
          },
        }
      },
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

export default formData;

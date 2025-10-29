import brandConnection from "@/aConnection/eBrandConnection";
import formValueDefault from "./dFormValueDefault";

const formData = ({ retrieveAPIResponse }: { retrieveAPIResponse: any }) => (
  retrieveAPIResponse.isLoading ? null : 
  retrieveAPIResponse.isError ? null :
  retrieveAPIResponse.isSuccess ? (
    retrieveAPIResponse.data.success ? ([
      // Basic Information
      {
        display: true,
        title: "Basic Information",
        subtitle: "This is just some subtitle for the basic information...",
        inputs: [
          { name: "aImage", label: "Image", type: "image", folderName: "project" },
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
        display: true,
        title: "Personal Information",
        subtitle: "This is just some subtitle for the personal information...",
        inputs: [
          { label: "Created By", type: "by", value: retrieveAPIResponse.data.retrieve?.bCreatedBy },
          { label: "Created At", type: "at", value: retrieveAPIResponse.data.retrieve?.bCreatedAt },
          { label: "Updated By", type: "by", value: retrieveAPIResponse.data.retrieve?.bUpdatedBy },
          { label: "Updated At", type: "at", value: retrieveAPIResponse.data.retrieve?.bUpdatedAt },
        ],  
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
            label: "Social Links",
            type: "dynamic-input",
            name: "dSocialLinks",
            children: {
              label: "Social Links",
              type: "object-array-input",
              inputType: "text-input",
              inputs: formValueDefault?.dSocialLinks,
              // onChange: () => console.log("Handle Change"),
              onAdd: ({ form, fieldName, inputs }: any) => {
                const updated = [
                  ...inputs,
                  {
                    aLinkTitle: "Instagra:X:Threads:Linkedin:Github",
                    bLinkURL: brandConnection.jInstagramURL,
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
          {
            label: "Web Links",
            type: "dynamic-input",
            name: "dWebLinks",
            children: {
              label: "Web Link",
              type: "object-array-input",
              inputType: "text-input",
              inputs: formValueDefault?.dWebLinks,
              // onChange: () => console.log("Handle Change"),
              onAdd: ({ form, fieldName, inputs }: any) => {
                const updated = [
                  ...inputs,
                  {
                    aLinkTitle: "Visit Application",
                    bLinkURL: brandConnection.fFrontendApplicationURL,
                  }
                ];
                form.setValue(fieldName, updated, { shouldValidate: true });
              },
              onRemove: ({ form, fieldName, inputs, index }: any) => {
                const updated = inputs.filter((_: any, i: number) => i !== index);
                form.setValue(fieldName, updated, { shouldValidate: true });
              },
            }
          },
          {
            label: "Gallery Images",
            type: "dynamic-input",
            name: "dGalleryImages",
            children: {
              label: "Gallery Image",
              type: "string-array-input",
              inputType: "image-input",
              folderName: "project",
              inputs: formValueDefault?.dGalleryImages,
              // onChange: () => console.log("Handle Change"),
              onAdd: ({ form, fieldName, inputs }: any) => {
                const updated = [
                  ...inputs, ""
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
      
    ]) : []
  ) : []
)

export default formData;

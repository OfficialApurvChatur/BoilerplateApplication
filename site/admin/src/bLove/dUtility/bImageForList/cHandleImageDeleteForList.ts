import axios from "axios";
import brandConnection from "@/aConnection/eBrandConnection";


const handleImageDeleteForList = async (index: any, preFieldName: any, fieldName: any, fieldName2: any, setFormObject: any, setFileLoading: any, fileID: any) => {
  setFileLoading(true)
  
  try {
    const parts = fileID?.split("/");

    const response = await axios.post(
      `${brandConnection.oBackendBaseURL}/api/v1/image-storage/single-image-delete/`,            
      {
        folder: "folder",
        public_id: parts?.[parts.length - 1]
      },
      { 
        withCredentials: true,
      },
    );

    console.log(response.data);
    // setFileID(null)
    // setFile(null)

    setFormObject((prevFormData: any) => {
      const updatedFields = (prevFormData?.[preFieldName]?.length > 0) ? [...(prevFormData as any)?.[preFieldName]] : [];
      updatedFields[index] = {
        ...updatedFields[index],
        [fieldName]: null,
        [fieldName2]: null,
      };
  
      return {
        ...prevFormData,
        [preFieldName]: updatedFields,
      };
    });
    
    return;
  } catch (error) {
    console.error(error);
  } finally {
    setFileLoading(false)
  } 
}

export default handleImageDeleteForList;

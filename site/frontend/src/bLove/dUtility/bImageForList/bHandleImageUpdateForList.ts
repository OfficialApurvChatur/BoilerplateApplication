import axios from "axios";
import brandConnection from "@/aConnection/eBrandConnection";


const handleImageUpdateForList = async (event: any, index: any, preFieldName: any, fieldName: any, fieldName2: any, setFormObject: any, setFileLoading: any, fileID: any) => {
  setFileLoading(true)

  if (!event.target.files?.[0]) {
    alert("Please select an image!");
    return setFileLoading(false);
  }

  const parts = fileID?.split("/");

  const formData = new FormData();
  formData.append("image", event.target.files?.[0]);
  formData.append("folder", "folder");
  formData.append("public_id", parts?.[parts.length - 1]);

  try {
    const response = await axios.post<{ update: { url: string, pid: string } }>(
      `${brandConnection.oBackendBaseURL}/api/v1/image-storage/single-image-update/`,      
      formData,
      { 
        headers: { "Content-Type": "multipart/form-data" }, 
        withCredentials: true,
      },
    );

    // console.log(response.data.update);
    // setFileID(response.data.update.pid)
    // setFile(response.data.update.url)

    setFormObject((prevFormData: any) => {
      const updatedFields = (prevFormData?.[preFieldName]?.length > 0) ? [...(prevFormData as any)?.[preFieldName]] : [];
      updatedFields[index] = {
        ...updatedFields[index],
        [fieldName]: response.data.update.url,
        [fieldName2]: response.data.update.pid,
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

export default handleImageUpdateForList;

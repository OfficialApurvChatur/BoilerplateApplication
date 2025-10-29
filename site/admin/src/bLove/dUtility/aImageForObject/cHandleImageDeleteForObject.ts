import axios from "axios";
import brandConnection from "@/aConnection/eBrandConnection";


const handleImageDeleteForObject = async (eachInput: any, form: any, setFileLoading: any, fileID: any) => {
  setFileLoading(true)
  
  try {
    // const response = 
    await axios.post(
      `${brandConnection.oBackendBaseURL}/api/v1/image-storage/single-image-delete/`,
      {
        folder: eachInput.folderName,
        public_id: fileID.split("/").pop().split(".")[0]
      },
      { 
        withCredentials: true,
      },
    );

    // console.log(response.data);
    form.setValue(eachInput.name, "")
    return;
  } catch (error) {
    console.error(error);
  } finally {
    setFileLoading(false)
  } 
}

export default handleImageDeleteForObject;

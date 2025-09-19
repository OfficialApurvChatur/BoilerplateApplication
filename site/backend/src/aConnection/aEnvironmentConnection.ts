import dotenv from "dotenv";


const environmentConnection = () => {  
	return dotenv.config({ path: ".env", override: true })
}

export default environmentConnection;

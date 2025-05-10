import dotenv from "dotenv"


const environmentConnection = () => {
  dotenv.config({ path: ".env" })
}

environmentConnection();

export default environmentConnection;

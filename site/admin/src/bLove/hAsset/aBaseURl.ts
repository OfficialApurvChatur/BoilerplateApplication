const baseURL = import.meta.env.VITE_ENVIRONMENT === "Production" ? 
  "" : 
  "http://localhost:8000/api/v1"

export default baseURL;

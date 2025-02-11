import activeServerJob from "../bLove/dJob/aActiveServerJob";
import apiLogJob from "../bLove/dJob/bAPILogJob";


const cronConnection = () => {
  // activeServerJob.start();
  apiLogJob.start();
}

export default cronConnection;

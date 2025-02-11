import { CronJob } from 'cron'


const activeServerJob = new CronJob("*/10 * * * * *", () => {
  // Cron Job to keep the server active
  console.log("Just to keep the server active")
})

export default activeServerJob;

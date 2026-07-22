import { Worker, Job } from "bullmq";
import bullMQConnection from "../../aConnection/kBullMQConnection";
import emailToCompanyMiddleware from '../../bLove/bMiddleware/nEmailToCompanyMiddleware';
import emailToUserMiddleware from '../../bLove/bMiddleware/oEmailToUserMiddleware';


const worker = new Worker(
  "email-queue",
  async (job: Job) => {
    console.log(`[EMAIL] ${job.name}`);

    switch (job.name) {
      case "list":
        break;

      case "create":
        break;

      case "retrieve":
        break;

      case "update":
        break;

      case "delete":
        break;
      
      case "both":
        emailToCompanyMiddleware({
          Label: job.data.Label,
          data: job.data.data,
          textMessage: job.data.textMessageToCompany,
        });

        emailToUserMiddleware({
          Label: job.data.Label,
          data: job.data.data,
          textMessage: job.data.textMessageToUser,
          request: job.data.request
        });
    
        break;

      default:
        throw new Error(`Unknown job: ${job.name}`);
    }
  },
  {
    connection: bullMQConnection,
  }
);

// worker.on("ready", () => {
//   console.log("🟢 Worker is ready");
// });

// worker.on("active", (job) => {
//   console.log(`🚀 Job ${job.id} (${job.name}) started`);
// });

// worker.on("completed", (job) => {
//   console.log(`✅ Job ${job.id} (${job.name}) completed`);
// });

// worker.on("failed", (job, err) => {
//   console.error(`❌ Job ${job?.id} (${job?.name}) failed`);
//   console.error(err);
// });

// worker.on("progress", (job, progress) => {
//   console.log(`📊 Job ${job.id} progress:`, progress);
// });

// worker.on("stalled", (jobId) => {
//   console.warn(`⚠️ Job ${jobId} stalled`);
// });

// worker.on("drained", () => {
//   console.log("📭 Queue drained (no waiting jobs)");
// });

// worker.on("paused", () => {
//   console.log("⏸️ Worker paused");
// });

// worker.on("resumed", () => {
//   console.log("▶️ Worker resumed");
// });

// worker.on("closing", () => {
//   console.log("🔄 Worker is closing");
// });

// worker.on("closed", () => {
//   console.log("🔴 Worker closed");
// });

// worker.on("error", (err) => {
//   console.error("💥 Worker error:", err);
// });

export default worker;

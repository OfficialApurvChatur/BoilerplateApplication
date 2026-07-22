import { Worker, Job } from "bullmq";

import bullMQConnection from "../../aConnection/kBullMQConnection";
import { automationService } from "../../eAutomation/cAutomationService";


const worker = new Worker(
  "automation-queue",
  async (job: Job) => {
    console.log(`[AUTOMATION] ${job.name}`, job.data);

    switch (job.name) {
      case "clone":
        // Handle clone

        await job.updateProgress(10);

        const workspace =
          await automationService.cloneRepository(
            job.data.repository
          );

        await job.updateProgress(100);
        
        return {
          workspace,
        };
        
      case "list":
        // Handle list
        break;

      case "create":
        // Handle create
        break;

      case "retrieve":
        // Handle retrieve
        break;

      case "update":
        // Handle update
        break;

      case "delete":
        // Handle delete
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

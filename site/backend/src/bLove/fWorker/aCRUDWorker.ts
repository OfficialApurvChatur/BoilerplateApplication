import { Worker } from "bullmq";
import bullMQConnection from "../../aConnection/kBullMQConnection";
import handlers from "./handlers";


const worker = new Worker(
  "crud-queue",
  async (job) => {
    const { handler } = job.data;

    const modelHandler = handlers[handler as keyof typeof handlers];

    if (!modelHandler) {
      throw new Error(`Unknown handler: ${handler}`);
    }

    const action = modelHandler[job.name as keyof typeof modelHandler];

    if (!action) {
      throw new Error(`Unknown action '${job.name}' for handler '${handler}'`);
    }

    await action(job.data);
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

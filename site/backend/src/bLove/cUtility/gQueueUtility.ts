import { Queue } from "bullmq";
import bullMQConnection from "../../aConnection/kBullMQConnection";


const defaultJobOptions = {
  attempts: 3,
  removeOnComplete: 100,
  removeOnFail: 1000,
}

const queueUtility = {
  crudQueue: new Queue("crud-queue", { connection: bullMQConnection, defaultJobOptions }),
  cacheQueue: new Queue("cache-queue", { connection: bullMQConnection, defaultJobOptions }),
  eventQueue: new Queue("event-queue", { connection: bullMQConnection, defaultJobOptions }),
  emailQueue: new Queue("email-queue", { connection: bullMQConnection, defaultJobOptions }),
  imageQueue: new Queue("image-queue", { connection: bullMQConnection, defaultJobOptions }),
  searchQueue: new Queue("search-queue", { connection: bullMQConnection, defaultJobOptions }),
  automationQueue: new Queue("automation-queue", { connection: bullMQConnection, defaultJobOptions }),
};

export default queueUtility;

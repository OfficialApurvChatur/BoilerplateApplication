import { Request, Response } from "express";
import queueUtility from "../bLove/cUtility/gQueueUtility";


export const automationController = {

  clone: async (
    req: Request,
    res: Response
  ) => {
    
    // Queue
    const job = await queueUtility.automationQueue.add("clone", {
      model: "automation",
      repository: req.body.repository,
    });

    // const workspace =
    //   await automationService.cloneRepository(
    //     req.body.repository
    //   );

    return res.status(202).json({
      success: true,
      message: "Automation job queued.",
      jobId: job.id,
    });
  
  }
};

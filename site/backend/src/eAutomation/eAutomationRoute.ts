import { Router } from "express";
import { automationController } from "./dAutomationController";

const router = Router();

router.post(
  "/clone",
  automationController.clone
);

export const automationRoute = router

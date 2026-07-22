import { promises as fs } from "fs";
import path from "path";
import crypto from "crypto";


const ROOT = path.join(process.cwd(), "src/eAutomation/workspace");

export class WorkspaceService {

  // Create Workspace
  static async create() {

    // Create Workspace Folder
    await fs.mkdir(ROOT, { recursive: true });

    const workspaceID = crypto.randomUUID();

    const workspacePath = path.join(ROOT, workspaceID);

    // Create ID Folder
    await fs.mkdir(workspacePath);

    return {
      workspacePath,
      workspaceID
    };
  }

  // Delete Workspace
  static async delete(workspace: string) {
    await fs.rm(workspace, {
      recursive: true,
      force: true,
    })
  }
}


// src/
// └── zAutomation/
//     ├── aAutomationRoute.ts
//     ├── aAutomationController.ts
//     ├── aAutomationService.ts
//     ├── aGitService.ts
//     ├── aPlopService.ts
//     ├── aWorkspaceService.ts
//     └── extra/

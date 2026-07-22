import path from "path";

import { WorkspaceService } from "./zService/aWorkspaceService";
import { gitService } from "./zService/bGitService";
import { PackageService } from "./zService/cPackageService";
import { PlopService } from "./zService/dPlopService";

// const ROOT = path.join(process.cwd(), "src/eAutomation/workspace/");

export const automationService = {
  cloneRepository: async (repository: string) => {
    console.log("Step 01 => Request received");
    
    const { workspacePath, workspaceID } = await WorkspaceService.create();
    console.log("Step 02 => Workspace created:", workspaceID);
    
    try {
      await gitService.clone(
        repository,
        workspacePath
      );
      console.log("Step 03 =>  Repository cloned");
      
      // const packageService = new PackageService();
      
      // await packageService.install(workspace);
      
      // console.log("Step 04 =>  Packages installed");

      const plopService = new PlopService();

      await plopService.runGenerator({
        workspacePath: workspacePath,
        generator: "a-first-generator",
        answers: {
          workspaceID: workspaceID,
        },
      });

      console.log("Step 04 =>  Plop");

      return workspacePath;  
    } catch (error) {
      await WorkspaceService.delete(workspacePath);
      throw error;
    }
  }
};

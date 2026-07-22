import { spawn } from "node:child_process";
import path from "path";


export class PackageService {
  async install(workspacePath: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const child = spawn("npm", ["install"], {
        cwd: path.join(workspacePath, "site", "backend"),
        shell: true,
        stdio: "inherit",
      });

      child.on("close", (code) => {
        if (code === 0) {
          resolve();
        } else {
          reject(new Error(`npm install failed with exit code ${code}`));
        }
      });

      child.on("error", reject);
    });
  }
}
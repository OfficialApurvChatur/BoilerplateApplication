import { spawn } from "node:child_process";


export interface RunGeneratorOptions {
  workspacePath: string;
  generator: string;
  answers: Record<string, string | number | boolean>;
}

export class PlopService {
  async runGenerator({ workspacePath, generator, answers }: RunGeneratorOptions) {
    const args: string[] = ["plop", generator];
    
    // Convert answers into CLI flags
    for (const [key, value] of Object.entries(answers)) {
      args.push(`--${key}`, String(value));
    }

    console.log("npx", args)

    return new Promise<{
      success: boolean;
      stdout: string;
      stderr: string;
    }>((resolve, reject) => {
      const child = spawn("npx", args, {
        cwd: process.cwd(),
        shell: true,
      });

      let stdout = "";
      let stderr = "";

      child.stdout.on("data", (data) => {
        const output = data.toString();
        stdout += output;
        console.log(output);
      });

      child.stderr.on("data", (data) => {
        const output = data.toString();
        stderr += output;
        console.error(output);
      });

      child.on("error", (err) => {
        reject(err);
      });

      child.on("close", (code) => {
        if (code === 0) {
          resolve({
            success: true,
            stdout,
            stderr,
          });
        } else {
          reject(
            new Error(
              `Plop exited with code ${code}\n\n${stderr}`
            )
          );
        }
      });
    });  }
}

// import simpleGit from "simple-git";

// export const gitService = {

//   clone: async (
//     repository: string,
//     destination: string
//   ) => {

//     const git = simpleGit({
//       maxConcurrentProcesses: 1
//     });

//     await git.clone(repository, destination, ["--progress"]);

//     return destination;
//   }

// }


import { spawn } from "node:child_process";


export const gitService = {
  clone: (repository: string, destination: string) =>
  new Promise<void>((resolve, reject) => {
    const child = spawn(
      "git",
      ["clone", repository, destination],
      {
        stdio: "inherit",
        shell: false
      }
    );

    child.on("error", reject);

    child.on("close", code => {
      if (code === 0) resolve();
      else reject(new Error(`git exited with ${code}`));
    });
  })

};

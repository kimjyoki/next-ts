/* eslint-disable */
const path = require("path");
// const childProcess = require("child_process");
// const nextVirtualPath = childProcess.execSync("yarn bin next").toString();

module.exports = {
  apps: [
    {
      name: "nextjs",
      cwd: __dirname,
      // yarn bin next - resuilt path copied;
      script: path.resolve(
        __dirname,
        ".yarn/__virtual__/next-virtual-289afadf9a/0/cache/next-npm-11.1.2-b1c338c95c-c5a6d01b6d.zip/node_modules/next/dist/bin/next",
      ),
      //interpreter: "/bin/bash",
      args: "start",
      instances: 3,
      exec_mode: "cluster",
      //exec_interpreter: "node",
      env: {
        PORT: "3000",
      },
      env_production: {
        PORT: "3000",
        NODE_ENV: "production",
      },
    },
  ],
};

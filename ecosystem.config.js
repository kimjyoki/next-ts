const path = require("path");

module.exports = {
  apps: [
    {
      name: "nextjs",
      script: "npm",
      interpreter: "babel-node",
      //interpreter_args: "--require ./.pnp.cjs",
      // args: "start",
      instances: 2,
      exec_mode: "cluster",
      //autostart: true,
      //merge_logs: false,
      //watch: false,
      //listen_timeout: 50000,
      //kill_timeout: 5000,
      env_development: {
        PORT: 3000,
        NODE_ENV: "development",
      },
      env_production: {
        PORT: 3000,
        NODE_ENV: "production",
      },
    },
  ],
};

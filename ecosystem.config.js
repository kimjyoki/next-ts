module.exports = {
  apps: [
    {
      name: "nextjs",
      // get binary path (nextjs + pm2 require node_modules/next/dist/next script);
      // $ yarn bin next
      script: ".yarn/__virtual__/next-virtual-9f90812a87/0/cache/next-npm-11.1.2-b1c338c95c-c5a6d01b6d.zip/node_modules/next/dist/bin/next",
      interpreter: "bash",
      interpreter_args: "--require ./.pnp.cjs",
      args: "start",
      instances: 2,
      exec_mode: "cluster",
      autostart: true,
      merge_logs: false,
      watch: false,
      listen_timeout: 50000, // 앱 실행 신호까지 기다릴 시간.
      kill_timeout: 5000,  // 새로운 프로세스 실행이 완료된 후 예전 프로세스를 교체하기까지 기다릴 시간
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

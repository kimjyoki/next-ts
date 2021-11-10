//const AntdDayjsWebpackPlugin = require("antd-dayjs-webpack-plugin");

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    //    config.plugins.push(new AntdDayjsWebpackPlugin());
    return config;
  },
};

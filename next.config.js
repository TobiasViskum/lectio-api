/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    config.ignoreWarnings = [
      {
        module: /node_modules[\\/]deasync/,
      },
      {
        module: /node_modules[\\/]http-cookie-agent/,
      },
    ];
    return config;
  },
};

module.exports = nextConfig;

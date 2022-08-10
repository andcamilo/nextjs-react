/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  env: {
    COGNITO_REGION: process.env.COGNITO_REGION,
    COGNITO_APP_CLIENT_ID: process.env.COGNITO_APP_CLIENT_ID,
    COGNITO_USER_POOL_ID: process.env.COGNITO_USER_POOL_ID,
  }
};

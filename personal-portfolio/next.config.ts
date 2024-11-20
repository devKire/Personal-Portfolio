import type { NextConfig } from "next";
require("dotenv").config();

module.exports = {
  env: {
    REACT_APP_EMAIL_JS_SERVICE_ID: process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
    REACT_APP_EMAIL_JS_TEMPLATE_ID: process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
    REACT_APP_EMAIL_JS_USER_ID: process.env.REACT_APP_EMAIL_JS_USER_ID,
  },
};

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

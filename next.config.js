/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true
}
// next.config.js
const withTM = require('next-transpile-modules')(['gsap']); // pass the modules you would like to see transpiled

module.exports = withTM({});

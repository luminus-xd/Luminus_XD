/** @type {import('next').NextConfig} */

const prod = process.env.NODE_ENV === 'production';
const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  register: true,
  disable: prod ? false : true,
  skipWaiting: true,
  publicExcludes: ['!robots.txt', '!sitemap.xml'],
});

module.exports = withPWA({
  reactStrictMode: true,
});

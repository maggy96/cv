const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');

module.exports = {
  ...withCSS(withSass()),
  assetPrefix: process.env.NODE_ENV === 'production' ? '/cv' : '',
};

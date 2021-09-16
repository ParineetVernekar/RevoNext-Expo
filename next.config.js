const { withExpo } = require('@expo/next-adapter');
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['react-native-web']);
const withFonts = require('next-fonts');
const withImages = require('next-images');

const nextConfig = {};


module.exports = withPlugins(

  [withTM, [withExpo, { projectRoot: __dirname }]],
  withFonts({
    projectRoot: __dirname,
  }),
  withImages({
    projectRoot: __dirname,
  }),
  nextConfig
  
  
);

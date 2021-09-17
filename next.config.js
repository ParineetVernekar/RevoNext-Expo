const { withExpo } = require('@expo/next-adapter');
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['react-native-web', '@koale/useworker']);
const withFonts = require('next-fonts');
const withImages = require('next-images');

const nextConfig = {};
// const withTM = require('next-transpile-modules')([
//   '@koale/useworker'
// ]);

module.exports = withPlugins(

  [withTM, [withExpo, { projectRoot: __dirname }]],
  withFonts(),
  withImages(),
  nextConfig
  
  
);

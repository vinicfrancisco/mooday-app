module.exports = api => {
  api.cache(true);
 
  return {
    plugins: ['babel-plugin-root-import'],
    presets: ['module:metro-react-native-babel-preset'],
  };
};


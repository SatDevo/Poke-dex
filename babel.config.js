module.exports = (api) => {
  api.cache(true);

  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      ['babel-plugin-root-import'], 
      ["module-resolver",
      {
        "root": ["./src"],
        "extensions": [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
        "alias": {
          "@assets": "./src/assets",
          "@features": "./src/features",
          "@components": "./src/components",
          "@data": "./src/data/",
          "@api": "./src/api/",
          "@lib": "./src/lib/"
        }
      }
  ],
  ],
  };
};

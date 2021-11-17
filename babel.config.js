function resolveByKey(config, key) {
  if (Array.isArray(config[key])) {
    config[key] = config[key].map((item) => {
      if (Array.isArray(item)) {
        item[0] = require.resolve(item[0]);
        return item;
      } else {
        return require.resolve(item);
      }
    });
  }
}

function resolve(config) {
  resolveByKey(config, "presets");
  resolveByKey(config, "plugins");
}

module.exports = resolve({
  presets: [
    [
      "@babel/preset-typescript",
      {
        targets: {
          browsers: "last 2 versions, Firefox ESR, ie >= 11",
          node: "6.10",
        },
        modules: false,
        useBuiltIns: "usage",
      },
    ],
    "@babel/preset-react",
    "@babel/preset-stage-0",
    "@babel/preset-typescript",
  ],
  plugins: [
    "@babel/plugin-proposal-decorators",
    "babel-plugin-transform-typescript-metadata",
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    ["@babel/plugin-transform-reserved-words"],
  ],
});

//
// module.exports = {
//   presets: [
//     [
//       "@babel/preset-env",
//       {
//         targets: {
//           edge: "17",
//           firefox: "60",
//           chrome: "67",
//           safari: "11.1",
//         },
//         useBuiltIns: "entry",
//       },
//     ],
//     "@babel/preset-typescript",
//   ],
//   plugins: [
//     "babel-plugin-transform-typescript-metadata",
//     ["@babel/plugin-proposal-decorators", { legacy: true }],
//     ["@babel/plugin-proposal-class-properties", { loose: true }],
//     ["@babel/plugin-transform-reserved-words"],
//   ],
// };

module.exports = {
  "presets": [
    [
      "@babel/preset-env",
      {
        "modules": false,
        "useBuiltIns": "entry"
      }
    ]
  ],
  "plugins": [
    [
      "@babel/plugin-transform-runtime" // 解决多个地方使用相同代码导致打包重复的问题
    ]
  ],
  "ignore": [
    "node_modules/**"
  ]
}
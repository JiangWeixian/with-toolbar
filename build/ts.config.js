const fs = require('fs')
const path = require('path')
const assign = require('lodash.assign')

const tsConfigPath = path.resolve(__dirname, '../tsconfig.json')

module.exports = function () {
  let my = {}
  if (fs.existsSync(tsConfigPath)) my = require(tsConfigPath)

  return assign(
    {
      noUnusedParameters: true,
      noUnusedLocals: true,
      strictNullChecks: true,
      target: 'es6',
      jsx: 'preserve',
      moduleResolution: 'node',
      declaration: true,
      allowSyntheticDefaultImports: true,
    },
    my.compilerOptions,
  )
}

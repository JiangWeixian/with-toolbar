const pkg = require('../package.json')

const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const fs = require('fs-extra')
const cssmodules = require('postcss-modules')({
  generateScopedName: `${pkg.prefix}_[name]_[local]`,
  getJSON(cssFileName, json, _outputFileName) {
    fs.outputFileSync(`${cssFileName}.json`, JSON.stringify(json))
    fs.outputFileSync(`${cssFileName.replace('/components/', '/es/')}.json`, JSON.stringify(json))
    fs.outputFileSync(`${cssFileName.replace('/components/', '/lib/')}.json`, JSON.stringify(json))
  },
})

module.exports = [autoprefixer({ overrideBrowserslist: ['last 1 version'] }), cssmodules, cssnano()]

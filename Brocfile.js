var compileES6 = require('broccoli-es6-concatenator');
var esnext = require('broccoli-esnext');
var mergeTrees = require('broccoli-merge-trees');
var pickFiles = require('broccoli-static-compiler');
var unwatchedTree = require('broccoli-unwatched-tree');

var appTree = compileES6('lib', {
  inputFiles: [
    '**/*.js'
  ],
  // legacyFilesToAppend: [
  //   'jquery.js',
  //   'handlebars.js'
  // ],
  wrapInEval: false,
  outputFile: '/lib/handlemarks.js'
});

var appTree = esnext(appTree);

var vendorTree = unwatchedTree('bower_components');
var vendorTree = pickFiles(vendorTree, {
  srcDir: '/',
  destDir: '/vendor'
});

var publicTree = 'public';

module.exports = mergeTrees([appTree, vendorTree, publicTree]);

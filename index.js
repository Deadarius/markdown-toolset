var markdownToolset = require('./lib/markdown-toolset')

if (!process.browser && typeof module === 'object') {
  module.exports = markdownToolset
} else if (typeof window.angular === 'object') {
  window.angular.module('markdown-toolset', []).value('markdownToolset', markdownToolset)
} else {
  window.markdownToolset = markdownToolset
}

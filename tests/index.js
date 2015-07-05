var fs = require('fs')
var path = require('path')
var currentFile = path.basename(__filename)

fs.readdir(__dirname, function (err, files) {
  if (err) return err

  files.forEach(function (file) {
    if (file === currentFile) {
      return
    }

    require('./' + file)
  })
})

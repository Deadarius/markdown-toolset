(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (process){
var markdownToolset = require('./lib/markdown-toolset')

if (!process.browser && typeof module === 'object') {
  module.exports = markdownToolset
} else if (typeof window.angular === 'object') {
  window.angular.module('markdown-toolset', []).value('markdownToolset', markdownToolset)
} else {
  window.markdownToolset = markdownToolset
}

}).call(this,require('_process'))
},{"./lib/markdown-toolset":2,"_process":5}],2:[function(require,module,exports){
var surroundOrUnsurround = require('./surround-or-unsurround')
var prefixOrUnprefix = require('./prefix-or-unprefix')

module.exports = {
  bold: function (text) {
    return surroundOrUnsurround(text, '**')
  },
  italic: function (text) {
    return surroundOrUnsurround(text, '*')
  },
  h1: function (text) {
    return prefixOrUnprefix(text, '# ')
  },
  h2: function (text) {
    return prefixOrUnprefix(text, '## ')
  },
  h3: function (text) {
    return prefixOrUnprefix(text, '### ')
  },
  h4: function (text) {
    return prefixOrUnprefix(text, '#### ')
  },
  h5: function (text) {
    return prefixOrUnprefix(text, '##### ')
  },
  h6: function (text) {
    return prefixOrUnprefix(text, '###### ')
  },
  header: function (text) {
    var len = text.length
    if (len > 1 && text[0] === '#') {
      var hashes = 1
      var textUnheaded
      for (var i = 1; i < len && i < 7; i++) {
        if (text[i] === '#') {
          hashes++
        } else {
          textUnheaded = text.slice(hashes + 1, len)
          break
        }
      }
      hashes++
      if (hashes === 7) {
        return textUnheaded
      }
      var fnName = 'h' + hashes
      var fn = this[fnName]
      return fn(textUnheaded)
    } else {
      return this.h1(text)
    }
  },
  ul: function (text) {
    var lines = text.split('\n')
    for (var i = 0; i < lines.length; i++) {
      lines[i] = prefixOrUnprefix(lines[i], '* ')
    }
    return lines.join('\n')
  },
  ol: function (text) {
    var lines = text.split('\n')
    for (var i = 0; i < lines.length; i++) {
      var prefix = i + 1 + '. '
      lines[i] = prefixOrUnprefix(lines[i], prefix)
    }
    return lines.join('\n')
  },
  hr: function () {
    return '***\n'
  },
  code: function (text) {
    var lines = text.split('\n')
    for (var i = 0; i < lines.length; i++) {
      lines[i] = prefixOrUnprefix(lines[i], '    ')
    }
    return lines.join('\n')
  }
}

},{"./prefix-or-unprefix":3,"./surround-or-unsurround":4}],3:[function(require,module,exports){
module.exports = function prefixOrUnprefix (text, prefix) {
  var len = prefix.length
  if (text.length > len && text.substring(0, len) === prefix) {
    return text.slice(len, text.length)
  }

  var res = prefix + text

  return res
}

},{}],4:[function(require,module,exports){
module.exports = function surroundOrUnsurround (text, surrounder) {
  var len = surrounder.length

  var left = text.substring(0, len)
  var right = text.substring(text.length - len, text.length)

  var unsurroundLeft = left === surrounder
  var unsurroundRight = right === surrounder

  var sliceLeft = unsurroundLeft ? len : 0
  var sliceRight = text.length - (unsurroundRight ? len : 0)

  var unsurrounded = text.slice(sliceLeft, sliceRight)
  if (unsurroundLeft || unsurroundRight) {
    return unsurrounded
  }

  return surrounder + unsurrounded + surrounder
}

},{}],5:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            currentQueue[queueIndex].run();
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}]},{},[1]);

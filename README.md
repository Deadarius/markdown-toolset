# Markdown Toolset

[![Build Status](https://travis-ci.org/Deadarius/markdown-toolset.svg?branch=master)](https://travis-ci.org/Deadarius/markdown-toolset)
[![Dependencies status](https://david-dm.org/Deadarius/markdown-toolset.svg)](https://david-dm.org/Deadarius/markdown-toolset)
[![codecov.io](http://codecov.io/github/Deadarius/markdown-toolset/coverage.svg?branch=master)](http://codecov.io/github/Deadarius/markdown-toolset?branch=master)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
## What?

Tiny module for markdown editing

## Why?

There are plenty of markdown editors out there but no simple small tool that provides just basic markdown editing capabilities without binding you to specific editor implementation.

## Where?

```
npm install markdown-toolset --save
```
or
```
bower install markdown-toolset --save
```

or just git clone and include dist/markdown-toolset.js on your page.

In browser it will try to find ```angular``` and register itself as ```markdown-toolset``` module. You then can include it in your module dependencies and inject ```markdownToolset``` service.
Without angular it will just pollute global scope with ```markdownToolset``` object.

## How?

```js
var mt = require('markdown-toolset')

mt.italic('text')                                //*text*
mt.bold('text')                                  //**text**
mt.h1('text')                                    //# text
mt.h2('text')                                    //## text
mt.h3('text')                                    //### text
mt.h4('text')                                    //#### text
mt.h5('text')                                    //##### text
mt.h6('text')                                    //###### text
mt.header('### text')                            //#### text - returns next header or cycles back to text
mt.link('http://example.com', 'text')            //[text](http://example.com)
mt.image('http://example.com/image.png', 'text') //![text](http://example.com/image.png)



mt.ul('line1\nline2\nline3')                     //* line1
                                                 //* line2
                                                 //* line3

mt.ol('line1\nline2\nline3')                     //1. line1
                                                 //2. line2
                                                 //3. line3

mt.code('line1\nline2\nline3')                   //    line1
                                                 //    line2
                                                 //    line3

mt.hr()                                          //***
                                                 //
```

## More?
Might be a good idea to make it configurable.
## License?
MIT

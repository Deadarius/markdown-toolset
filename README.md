# Markdown Toolset
[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
## What?

Tiny module for markdown editing

## Why?

There are plenty of markdown editors out there but no simple small tool that provides just basic markdown editing capabilities without binding you to specific editor implementation.

## Where?

```
npm install markdown-toolset
```

## How?

```js
var mt = require('markdown-toolset')

mt.italic('text')              //*text*
mt.bold('text')                //**text**
mt.h1('text')                  //# text
mt.h2('text')                  //## text
mt.h3('text')                  //### text
mt.h4('text')                  //#### text
mt.h5('text')                  //##### text
mt.h6('text')                  //###### text

mt.ul('line1\nline2\nline3')   //* line1
                               //* line2
                               //* line3

mt.ol('line1\nline2\nline3')   //1. line1
                               //2. line2
                               //3. line3

mt.code('line1\nline2\nline3') //    line1
                               //    line2
                               //    line3

mt.hr()                        //***
                               //
```
## License?
MIT

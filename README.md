# Markdown Toolset
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

## More?

Need to include support for .link() and .image().
Might be a good idea to make it configurable.
## License?
MIT

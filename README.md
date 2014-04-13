docpad-plugin-jison
===================

This a docpad plugin for [Jison](http://zaach.github.io/jison/) - the friendly JavaScript parser generator 

To set the variable name for the parser use **moduleName** (default: parser) meta tag in your file.

*grammar.js.jison*

```
---
moduleName: 'my_parser'
---
/* description: Basic grammar that contains a nullable A nonterminal. */

%%

A
    : A x
    | 
    ;
```

Then your generated parser would start with this line:

```
var my_parser = (function(){
```

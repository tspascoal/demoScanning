// index.js
var acorn = require('acorn'),
    fs = require('fs');
acorn.parse(fs.readFileSync('tst.js'), 'utf-8')
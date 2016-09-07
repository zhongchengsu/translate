var tr=require('../translate');//("file")
var table = require("./tr.json");
tr.init(table);
console.log(tr.tr("abc"));
console.log(tr.tr("123"));
console.log(tr.tr(null));
console.log(tr.tr());
console.log(tr.tr("hello"));
console.log(tr.tr("hello world!"));


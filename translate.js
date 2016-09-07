function translate(transTable){
  /*init hash table for translate*/
  this.hashTable = [];
}

translate.tr = function tr(str,callback){
  console.log(str);
  callback(null, "测试");

}
module.exports = translate;

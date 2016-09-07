function translate(){
  /*init hash table for translate*/
  this.hashTable = null;
}

function Debug(str)
{
  //console.log(str);
}

translate.init = function init(trTable){
  
  Debug(trTable);
  if(trTable !== undefined || trTable !== null)
  {
    if(this.hashTable == undefined || this.hashTable == null)
    {
      //init table
      var hashtable = require('hashtable');
      this.hashTable = new hashtable();
      for (str in trTable) {
          Debug(trTable[str]["key"]);
          Debug(trTable[str]["value"]);
          this.hashTable.put(trTable[str]["key"], {value: trTable[str]["value"]});
      }
    }
    else {
      // table has been init.
      console.log("Translate table has already built!");
    }  
  }
  else
  {
    //throw err, please input a exits file name
    console.log("Input value is null!")
  }
}

translate.tr = function tr(str){
  Debug(str);
  var translate = str;
  if(str !== undefined && str !== null) {
    var tr = this.hashTable.get(str);
    Debug(tr);
    if (tr !== undefined) {
      translate = tr.value;
    }
  }
  return translate;
}
module.exports = translate;

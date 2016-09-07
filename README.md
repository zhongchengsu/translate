# translate 

# Usage

  npm instll hashTranslate

demo

```javascript
  var tr=require('hashTranslate');//("file")
  var table = require("./tr.json");
  tr.init(table);
  console.log(tr.tr("abc"));
  console.log(tr.tr("123"));
```

format of file "tr.json"
```javascript
{
  "1":{"key": "abc", "value": "这是字母"},
  "2":{"key": "123", "value": "这是数字"},
  "3":{"key": "me", "value": "这是我"},
  "4":{"key": "he", "value": "这是他"},
  "5":{"key": "hello", "value": "这是你好"},
  "6":{"key": "thanks", "value": "这是谢谢"}
}
```


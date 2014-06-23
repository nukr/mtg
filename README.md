# MTG.js

## Install

`npm install mtg --save`

## Example

```javascript
var mtg = require('mtg');
mtg.download(function () {
    mtg.json2db(function () {
        console.log('done');
    });
});
```

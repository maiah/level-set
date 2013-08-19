level-set
=========

Saves JSON to your LevelDB

### Install
```bash
npm install level-path
```

```js
var LevelUp = require('levelup'),
    LevelPath = require('level-path');

var db = LevelUp('./testdb');

LevelPath(db);
```

### Set JSON object
```js
var person = { name: 'Maiah', occupation: 'Ninja' };
db.set('/', person, function (err) {
  if (!err) console.log('Saved person under root path');
});
```

This will put LevelDB data structure at the `root` path.
```
name = Maiah
occupation = Ninja
```

You can also save any valid JSON structure.
```js
var person = {
  name: 'Maiah',
  occupation: 'Ninja',
  tools: {
    lang: 'js'
  }
};

db.set('/', person, function (err) {
  if (!err) console.log('Saved person under root path');
});

```

This will put LevelDB data structure at the `root` path.
```
name = Maiah
occupation = Ninja
tools/lang = js
```

You can also specify a path other than the `root`.
```js
var person = { name: 'Maiah', occupation: 'Ninja' };
db.set('/person', person, function (err) {
  if (!err) console.log('Saved person object');
});

```

This will put LevelDB data structure at the `person` path.
```
person/name = Maiah
person/occupation = Ninja
```

### License
MIT
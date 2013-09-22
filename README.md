level-set
=========

Saves JSON to your LevelDB. Converting your JSON to LevelDB key-value pair data structure.

### Install
```bash
npm install level-set
```

```js
var LevelUp = require('levelup'),
    LevelSet = require('level-set');

var db = LevelUp('./testdb');

LevelSet(db);
```

### Set JSON object
```js
var person = { name: 'Maiah', occupation: 'Ninja' };
db.set('/', person, function (err) {
  if (!err) console.log('Saved person under root path');
});
```

This will put key-value pairs LevelDB data structure at the `root` path.
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

This will put key-value pairs LevelDB data structure at the `root` path.
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

This will put key-value pairs LevelDB data structure at the `person` path.
```
person/name = Maiah
person/occupation = Ninja
```

### License
MIT

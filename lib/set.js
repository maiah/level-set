module.exports = function (db) {
	db.set = set;
	return db;
};

function set(path, obj, cb) {
	var objs = [];
  putObjBatch(path, obj, objs);

  this.batch(objs, function (err) {
		cb(err);
	});
}

function putObjBatch(path, obj, objs) {
	var keyPath = '';
	if (path !== '/' && path.length > 1) {
		keyPath = path.substr(1) + '/';
	}

	for (var objKey in obj) {
		var objVal = obj[objKey];

		if (typeof objVal === 'object') {
			if (keyPath !== '' && keyPath.length > 1) {
				putObjBatch('/' + keyPath + objKey, objVal, objs);
			} else {
				putObjBatch('/' + objKey, objVal, objs);
			}

		} else {
			objs.push({ type: 'put', key: keyPath + objKey, value: objVal });
		}
  }
}
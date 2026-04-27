function(doc) {

	if (doc.java_type == 'org.taktik.icure.entities.Insurance' && !doc.deleted) {
		var normalize = require('views/lib/normalize').normalize

		var compute_normalized_substrings = function(acc,txt) {
			var r = normalize(txt.toLowerCase())
			for (var i=0;i<=r.length-3;i++) {
				acc[(r.substr(i,r.length-i))] = 1;
			}
		};

		if (doc.name) {
			var acc = {};
			Object.keys(doc.name).forEach(function (l) {
				compute_normalized_substrings(acc, doc.name[l]);
			});

			Object.keys(acc).forEach(function (k) {
				emit([k], doc._id);
			});
		}
	}
}

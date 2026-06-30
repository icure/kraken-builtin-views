map = function(doc) {

	if (doc.java_type === 'org.taktik.icure.entities.Insurance' && !doc.deleted && doc.name) {
		var acc = new Set();
		var normalize_and_substring = require('views/lib/normalize').normalize_and_substring

		var compute_normalized_substrings = function(txt) {
			normalize_and_substring([txt], null, 100, (it) => {
				acc.add(it)
			})
		};


		Object.keys(doc.name).forEach(function (l) {
			compute_normalized_substrings(doc.name[l]);
		});

		for(const k of acc) {
			emit([k], doc._id);
		}
	}
}

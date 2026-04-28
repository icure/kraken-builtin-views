function (doc) {
	if (doc.java_type === 'org.taktik.icure.entities.Patient' && !doc.deleted) {
		var normalize = require('views/lib/normalize').normalize

		var emit_normalized_substrings = function (k, txt, postalCode, houseNumber, docId) {
			var r = normalize(txt.toLowerCase());
			for (var i = 0; i <= r.length - 3; i++) {
				emit([k, (r.substr(i, r.length - i)), postalCode, houseNumber], docId);
			}
		};

		var emit_patients_by_address = function (hcparty, doc, latin_map) {
			doc.addresses.forEach(function (address) {
				emit_normalized_substrings(hcparty, ((address.street || '') + '|' + (address.city || '')).replace(new RegExp('\\s', 'g'), '').replace(new RegExp('\\W', 'g'), '').toLowerCase(), address.postalCode, address.houseNumber, doc._id);
			});
		};

		require('views/lib/emit_for_delegates').emit_for_delegates(doc, function (dataOwnerId, doc) {
			emit_patients_by_address(dataOwnerId, doc, latin_map)
		})
	}
};

function (doc) {
	var emit_patients_by_telecom = function (hcparty, doc) {
		doc.addresses.forEach(function (address) {
			if (address.telecoms && address.telecoms.length) {
				address.telecoms.forEach(function (telecom) {
					emit([hcparty, telecom.telecomNumber.replace(new RegExp('\\s', 'g'), '').replace(new RegExp('\\W', 'g'), '')], doc._id);
				});
			}
		});
	};

	if (doc.java_type === 'org.taktik.icure.entities.Patient' && !doc.deleted) {
        require('views/lib/emit_for_delegates').emit_for_delegates(doc, function (dataOwnerId, doc) {
			emit_patients_by_telecom(dataOwnerId, doc);
		})
	}
};

function(doc) {
	var emit_invoices = function (k, doc) {
		var ctsIds = {};
		doc.invoicingCodes.forEach(function(ic) {
			if (ic.contactId) {
				ctsIds[ic.contactId] = 1;
			}
		});
		Object.keys(ctsIds).forEach(function (cid) {
			emit([k, cid], null);
		});
	};

	if (doc.java_type === 'org.taktik.icure.entities.Invoice' && !doc.deleted) {
        require('views/lib/emit_for_delegates').emit_for_delegates(doc, function (dataOwnerId, doc) {
			emit_invoices(dataOwnerId, doc)
		})
	}
}

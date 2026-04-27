function(doc) {
    var emit_forms = function (k, doc) {
		emit([k, doc.invoiceDate], null);
	};

	if (doc.java_type === 'org.taktik.icure.entities.Invoice' && !doc.deleted) {
        require('views/lib/emit_for_delegates').emit_for_delegates(doc, function (dataOwnerId, doc) {
			emit_forms(dataOwnerId, doc);
		})
	}
}

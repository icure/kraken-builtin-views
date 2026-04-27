function(doc) {
	if (doc.java_type === 'org.taktik.icure.entities.Invoice' && !doc.deleted && !!doc.sentMediumType && !!doc.invoiceType) {
        require('views/lib/emit_for_delegates').emit_for_delegates(doc, function (dataOwnerId, doc) {
			emit([dataOwnerId, doc.sentMediumType, doc.invoiceType, !!doc.sentDate, doc.invoiceDate], null)
		})
	}
}

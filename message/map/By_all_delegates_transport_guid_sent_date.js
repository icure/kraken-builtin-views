function(doc) {
	if (doc.java_type === 'org.taktik.icure.entities.Message' && !doc.deleted && doc.sent) {
        require('views/lib/emit_for_delegates').emit_for_delegates(doc, function (dataOwnerId, doc) {
			emit([dataOwnerId, doc.transportGuid ? doc.transportGuid.split(":").slice(0, -1).join(":") : undefined, doc.sent], null);
		})
	}
}

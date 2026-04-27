function(doc) {
    if (doc.java_type === 'org.taktik.icure.entities.Invoice' && !doc.deleted && !!doc.decisionReference) {
        require('views/lib/emit_for_delegates').emit_for_delegates(doc, function (dataOwnerId, doc) {
			emit([dataOwnerId, doc.decisionReference], doc._id)
		})
	}
}

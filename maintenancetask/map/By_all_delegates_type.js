function(doc) {
	if (doc.java_type === 'org.taktik.icure.entities.MaintenanceTask' && !doc.deleted && doc.taskType && doc.created) {
        require('views/lib/emit_for_delegates').emit_for_delegates(doc, function (dataOwnerId, doc) {
			emit([dataOwnerId, doc.taskType, doc.created], null)
		})
	}
}

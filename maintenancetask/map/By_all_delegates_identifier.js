function(doc) {
    if (doc.java_type === 'org.taktik.icure.entities.MaintenanceTask' && !doc.deleted && doc.identifier) {
        require('views/lib/emit_for_delegates').emit_for_delegates(doc, function (dataOwnerId, doc) {
            doc.identifier.forEach(function(k) {
                emit([dataOwnerId, k.system, k.value], null);
            });
        })
    }
}

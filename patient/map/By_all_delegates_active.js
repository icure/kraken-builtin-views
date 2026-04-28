function(doc) {
    if (doc.java_type === 'org.taktik.icure.entities.Patient' && !doc.deleted) {
        require('views/lib/emit_for_delegates').emit_for_delegates(doc, function (dataOwnerId, doc) {
            emit([dataOwnerId, doc.active ? 1 : 0], null);
        })
    }
}

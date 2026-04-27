function(doc) {
    if (doc.java_type === 'org.taktik.icure.entities.HealthElement' && !doc.deleted) {
        const value = doc.healthElementId != undefined ? doc.healthElementId : null
        require('views/lib/emit_for_delegates').emit_for_delegates(doc, function (dataOwnerId, doc) {
            emit([dataOwnerId, doc.status], value);
        })
    }
}

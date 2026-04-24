function(doc) {
    if (doc.java_type === 'org.taktik.icure.entities.Contact' && !doc.deleted) {
        require('views/lib/emit_for_delegates').emit_for_delegates(doc, function (dataOwnerId, doc) {
            emit(dataOwnerId, null)
        })
    }
}

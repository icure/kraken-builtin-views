function(doc) {
    if (doc.java_type === 'org.taktik.icure.entities.Patient' && !doc.deleted && (!!doc.modified || !!doc.created)) {
        require('views/lib/emit_for_delegates').emit_for_delegates(doc, function (dataOwnerId, doc) {
            emit(dataOwnerId, doc.modified || doc.created);
        })
    }
}

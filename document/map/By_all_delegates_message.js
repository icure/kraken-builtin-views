function(doc) {
    if (doc.java_type === 'org.taktik.icure.entities.Document' && !doc.deleted && doc.secretForeignKeys && doc.secretForeignKeys.length) {
        require('views/lib/emit_for_delegates').emit_for_delegates(doc, function (dataOwnerId, doc) {
            doc.secretForeignKeys.forEach(function(fk) {
                emit([dataOwnerId, fk], doc.created);
            })
        })
    }
}

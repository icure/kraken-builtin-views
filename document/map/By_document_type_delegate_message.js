function(doc) {
    if (doc.java_type === 'org.taktik.icure.entities.Document' && !doc.deleted && doc.documentType && doc.secretForeignKeys && doc.secretForeignKeys.length) {
        require('views/lib/emit_for_delegates').emit_for_delegates(doc, function (dataOwnerId, doc) {
            doc.secretForeignKeys.forEach(function(fk) {
                emit([doc.documentType, dataOwnerId, fk], null);
            });
        })
    }
}

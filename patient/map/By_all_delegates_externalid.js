function(doc) {
    if (doc.java_type === 'org.taktik.icure.entities.Patient' && !doc.deleted && doc.externalId) {
        var externalId = doc.externalId.replace(new RegExp('\\s', 'g'), '').replace(new RegExp('\\W', 'g'), '');
        require('views/lib/emit_for_delegates').emit_for_delegates(doc, function (dataOwnerId, doc) {
            emit([dataOwnerId, externalId], null);
        })
    }
}

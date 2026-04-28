function(doc) {
    if (doc.java_type === 'org.taktik.icure.entities.Patient' && !doc.deleted && doc.identifier) {
        require('views/lib/emit_for_delegates').emit_for_delegates(doc, function (dataOwnerId, doc) {
            let emittedIdentifierValues
            emittedIdentifierValues = new Set()

            doc.identifier.forEach(function(k) {
                if (!emittedIdentifierValues.has(k.system)) {
                    emit([dataOwnerId, k.system], null);
                    emittedIdentifierValues.add(k.system)
                }
                emit([dataOwnerId, k.system, k.value], null);
            });
        })
    }
}

function (doc) {
    if (doc.java_type === 'org.taktik.icure.entities.HealthElement' && !doc.deleted && doc.identifiers) {
        const value = doc.healthElementId != undefined ? doc.healthElementId : null
        require('views/lib/emit_for_delegates').emit_for_delegates(doc, function (dataOwnerId, doc) {
            doc.identifiers.forEach(function (k) {
                emit([dataOwnerId, k.system, k.value], value);
            });
        })
    }
};

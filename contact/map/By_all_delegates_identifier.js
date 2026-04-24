function(doc) {
    var emit_contacts = function (hcParty, doc) {
        if (doc.identifier && doc.identifier.length) {
            doc.identifier.forEach(function (identifier) {
                emit([hcParty, identifier.system, identifier.value], null);
            });
        }
    };

    if (doc.java_type === 'org.taktik.icure.entities.Contact' && !doc.deleted) {
        require('views/lib/emit_for_delegates').emit_for_delegates(doc, function (dataOwnerId, doc) {
            emit_contacts(dataOwnerId, doc)
        })
    }
}

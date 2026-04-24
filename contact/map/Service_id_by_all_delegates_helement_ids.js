function (doc) {
    var emit_services_by_helement = function (hcparty, doc) {
        doc.subContacts.forEach(function (sc) {
            if (sc.healthElementId && sc.services && Object.keys(sc.services).length) {
                sc.services.forEach(function (s) {
                    emit([hcparty, sc.healthElementId], s.serviceId)
                })
            }
        });
    };

    if (doc.java_type === 'org.taktik.icure.entities.Contact' && !doc.deleted) {
        require('views/lib/emit_for_delegates').emit_for_delegates(doc, function (dataOwnerId, doc) {
            emit_services_by_helement(dataOwnerId, doc)
        })
    }
}

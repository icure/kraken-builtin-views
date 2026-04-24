function(doc) {
    var emit_services_by_identifier = function (hcparty, doc) {
        doc.services.forEach(function (service) {
            if (service.identifier && service.identifier.length) {
                service.identifier.forEach(function (identifier) {
                    emit([hcparty, identifier.system, identifier.value], service._id);
                });
            }
        });
    };

    if (doc.java_type === 'org.taktik.icure.entities.Contact' && !doc.deleted) {
        require('views/lib/emit_for_delegates').emit_for_delegates(doc, function (dataOwnerId, doc) {
            emit_services_by_identifier(dataOwnerId, doc)
        })
    }
}

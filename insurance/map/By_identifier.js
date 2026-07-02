map = function (doc) {
    var emit_insurance = function (doc) {
        if (doc.identifier && doc.identifier.length) {
            doc.identifier.forEach(function (identifier) {
                emit([identifier.system, identifier.value], doc._id);
            });
        };
    };

    if (doc.java_type === 'org.taktik.icure.entities.Insurance' && !doc.deleted) {
        emit_insurance(doc)
    }
}

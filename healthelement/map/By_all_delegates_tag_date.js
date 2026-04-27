function(doc) {
    if (doc.java_type === 'org.taktik.icure.entities.HealthElement' && !doc.deleted && doc.tags && doc.tags.length) {
        const date = doc.valueDate != undefined ? doc.valueDate : doc.openingDate
        const value = doc.healthElementId != undefined ? doc.healthElementId : null
        require('views/lib/emit_for_delegates').emit_for_delegates(doc, function (dataOwnerId, doc) {
            doc.tags.forEach(function (tag) {
                emit([dataOwnerId, tag.type, tag.code, date], value);
            })
        })
    }
}

function(doc) {
    if (doc.java_type === 'org.taktik.icure.entities.HealthElement' && !doc.deleted && doc.tags && doc.tags.length) {
        require('views/lib/emit_for_delegates'). emit_for_delegates(doc, function (dataOwnerId, doc) {
            const value = {}
            const valueDate = doc.valueDate != undefined ? doc.valueDate : doc.openingDate
            if (valueDate != undefined) {
                value.d = valueDate
            }
            if (doc.healthElementId != undefined) {
                value.h = doc.healthElementId
            }
            doc.tags.forEach(function (tag) {
                emit([dataOwnerId, tag.type, tag.code], value);
            })
        })
    }
}

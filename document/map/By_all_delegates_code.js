function(doc) {
    if (doc.java_type === 'org.taktik.icure.entities.Document' && !doc.deleted) {
        require('views/lib/emit_for_delegates').emit_for_delegates(doc, function (dataOwnerId, doc) {
            let emittedTagTypes
            emittedTagTypes = new Set()

            doc.codes.forEach(function (code) {
                if (!emittedTagTypes.has(code.type)) {
                    emit([dataOwnerId, code.type], null);
                    emittedTagTypes.add(code.type)
                }
                emit([dataOwnerId, code.type, code.code], null);
            })
        })
    }
}

function(doc) {
    if (doc.java_type === 'org.taktik.icure.entities.Message' && !doc.deleted) {
        let emittedTagTypes
        emittedTagTypes = new Set()

        require('views/lib/emit_for_delegates').emit_for_delegates(doc, function (delegate, doc) {
            doc.codes.forEach(function (code) {
                if (!emittedTagTypes.has(code.type)) {
                    emit([delegate, code.type], null);
                    emittedTagTypes.add(code.type)
                }
                emit([delegate, code.type, code.code], null);
            })
        })
    }
}

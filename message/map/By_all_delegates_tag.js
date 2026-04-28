function(doc) {
    if (doc.java_type === 'org.taktik.icure.entities.Message' && !doc.deleted) {
        let emittedTagTypes
        emittedTagTypes = new Set()
        require('views/lib/emit_for_delegates').emit_for_delegates(doc, function (delegate, doc) {
            doc.tags.forEach(function (tag) {
                if (!emittedTagTypes.has(tag.type)) {
                    emit([delegate, tag.type], null);
                    emittedTagTypes.add(tag.type)
                }
                emit([delegate, tag.type, tag.code], null);
            })
        })
    }
}
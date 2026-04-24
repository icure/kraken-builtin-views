function(doc) {
    if (doc.java_type === 'org.taktik.icure.entities.Document' && !doc.deleted) {
        require('views/lib/emit_for_delegates').emit_for_delegates(doc, function (dataOwnerId, doc) {
            let emittedTagTypes
            emittedTagTypes = new Set()

            doc.tags.forEach(function (tag) {
                if (!emittedTagTypes.has(tag.type)) {
                    emit([dataOwnerId, tag.type], null);
                    emittedTagTypes.add(tag.type)
                }
                emit([dataOwnerId, tag.type, tag.code], null);
            })
        })
    }
}

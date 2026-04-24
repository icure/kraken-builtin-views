function(doc) {
    if (doc.java_type === 'org.taktik.icure.entities.CalendarItem' && (doc.deleted != null || doc.created != null || doc.modified != null)) {
        const latestUpdate = [doc.deleted, doc.created, doc.modified].reduce((p, c) => (c ? c : 0) > p ? c : p, 0)
        require('views/lib/emit_for_delegates').emit_for_delegates(doc, function (dataOwnerId, doc) {
            emit([dataOwnerId, latestUpdate], null)
        })
    }
}

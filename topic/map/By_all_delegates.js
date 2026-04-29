function(doc) {
    if (doc.java_type === 'org.taktik.icure.entities.Topic' && !doc.deletionDate) {
        require('views/lib/emit_for_delegates').emit_for_delegates(doc, function (dataOwnerId, doc) {
            emit([dataOwnerId, Object.keys(doc.activeParticipants).includes(dataOwnerId)], doc._id);
        })
    }
}

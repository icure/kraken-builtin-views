function(doc) {
  if (doc.java_type === 'org.taktik.icure.entities.Invoice' && !doc.deleted) {
    if (doc.groupId) {
        require('views/lib/emit_for_delegates').emit_for_delegates(doc, function (dataOwnerId, doc) {
        emit([dataOwnerId, doc.groupId], null)
      })
    }
  }
}

function(doc) {
  if (doc.java_type === 'org.taktik.icure.entities.Invoice' && !doc.deleted && !doc.sentDate && doc.secretForeignKeys && doc.secretForeignKeys.length) {
      require('views/lib/emit_for_delegates').emit_for_delegates(doc, function (dataOwnerId, doc) {
        doc.secretForeignKeys.forEach(function(fk) {
            emit([dataOwnerId, fk], null);
        })
    })
  }
}

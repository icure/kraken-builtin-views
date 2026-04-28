function(doc) {
  if (doc.java_type === 'org.taktik.icure.entities.Message' && !doc.deleted && doc.secretForeignKeys && doc.secretForeignKeys.length) {
    var fkIds = {};
    doc.secretForeignKeys.forEach(function(fk) {
      fkIds[fk] = 1;
    });
    require('views/lib/emit_for_delegates').emit_for_delegates(doc, function (dataOwnerId, doc) {
      Object.keys(fkIds).forEach(function (fk) {
        emit([dataOwnerId, fk], doc.sent);
      });
    })
  }
}

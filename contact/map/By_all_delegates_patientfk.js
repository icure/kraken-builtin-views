function(doc) {
  var emit_contacts = function (k, doc) {
    doc.secretForeignKeys.forEach(function (fk) {
      emit([k, fk], doc.openingDate);
    });
  };

  if (doc.java_type === 'org.taktik.icure.entities.Contact' && !doc.deleted && doc.secretForeignKeys && doc.secretForeignKeys.length) {
    require('views/lib/emit_for_delegates').emit_for_delegates(doc, function (dataOwnerId, doc) {
      emit_contacts(dataOwnerId, doc);
    })
  }
}

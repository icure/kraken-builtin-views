function(doc) {
  var emit_forms = function (k, doc) {
    doc.secretForeignKeys.forEach(function (fk) {
      emit([k, fk], doc.openingDate);
    });
  };

  if (doc.java_type === 'org.taktik.icure.entities.Form' && !doc.deleted && doc.secretForeignKeys && doc.secretForeignKeys.length) {
      require('views/lib/emit_for_delegates').emit_for_delegates(doc, function (dataOwnerId, doc) {
      emit_forms(dataOwnerId, doc)
    })
  }
}

function(doc) {
  var emit_forms = function (k, doc) {
    emit([k, doc.parent], null);
  };

  if (doc.java_type == 'org.taktik.icure.entities.Form' && !doc.deleted && doc.parent) {
      require('views/lib/emit_for_delegates').emit_for_delegates(doc, function (dataOwnerId, doc) {
        emit_forms(dataOwnerId, doc);
    })
  }
}

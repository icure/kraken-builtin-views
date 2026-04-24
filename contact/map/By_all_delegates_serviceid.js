function(doc) {
  var emit_contacts = function (k, doc) {
    var idsMap = {};
    doc.services.forEach(function (s) {
      if (s._id) {
        if (!idsMap[s._id]) {
          idsMap[s._id] = 1;
          emit([k, s._id], null);
        }
      }
    });
  };

  if (doc.java_type === 'org.taktik.icure.entities.Contact' && !doc.deleted && doc.secretForeignKeys && doc.secretForeignKeys.length) {
    require('views/lib/emit_for_delegates').emit_for_delegates(doc, function (dataOwnerId, doc) {
     emit_contacts(dataOwnerId, doc);
    })
  }
}

function(doc) {
  if (doc.java_type === 'org.taktik.icure.entities.Contact' && !doc.deleted) {
    require('views/lib/emit_for_delegates').emit_for_delegates(doc, function (delegate, doc) {
      doc.services.forEach(function (service) {
        if (service.codes && service.codes.length && service._id != null) {
          service.codes.forEach(function (code) {
            emit([delegate, code.type, code.code], [service._id, service.valueDate || service.openingDate]);
          });
        }
      });
    })
  }
}

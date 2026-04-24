function(doc) {
  if (doc.java_type === 'org.taktik.icure.entities.Contact' && !doc.deleted) {
    require('views/lib/emit_for_delegates').emit_for_delegates(doc, function (delegate, doc) {
      doc.services.forEach(function (service) {
        if (service.tags && service.tags.length && service._id != null) {
          service.tags.forEach(function (tag) {
            emit([delegate, tag.type, tag.code], [service._id, service.valueDate || service.openingDate]);
          });
        }
      });
    });
  }
}

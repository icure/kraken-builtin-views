function(doc) {
  var emit_services_by_sfk_code = function(hcparty, doc) {
    doc.secretForeignKeys.forEach(function (fk) {
      doc.services.forEach(function (service) {
        const d = service.valueDate ? service.valueDate : service.openingDate;
        if (service.tags && service.tags.length && service._id != null) {
          service.tags.forEach(function (tag) {
            emit([hcparty, fk, tag.type, tag.code], [service._id, d]);
          });
        }
      });
    });
  };

  if (doc.java_type === 'org.taktik.icure.entities.Contact' && !doc.deleted) {
    require('views/lib/emit_for_delegates').emit_for_delegates(doc, function (dataOwnerId, doc) {
      emit_services_by_sfk_code(dataOwnerId, doc);
    })
  }
}

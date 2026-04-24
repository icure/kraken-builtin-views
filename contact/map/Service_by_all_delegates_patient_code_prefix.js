function(doc) {
  var emit_services_by_sfk_code = function(hcparty, doc) {
    doc.secretForeignKeys.forEach(function (fk) {
      doc.services.forEach(function (service) {
        const d = service.valueDate ? service.valueDate : service.openingDate;
        if (service.codes && service.codes.length && service._id != null) {
          service.codes.forEach(function (code) {
            emit([hcparty, fk, code.type, code.code], [service._id, d]);
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

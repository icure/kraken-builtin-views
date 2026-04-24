function(doc) {
  var emit_services_by_sfk_code = function(hcparty, doc) {
    doc.secretForeignKeys.forEach(function (fk) {
      doc.services.forEach(function (service) {
        var d = service.valueDate ? service.valueDate : service.openingDate;
        if (service.codes && service.codes.length) {
          service.codes.forEach(function (code) {
            emit([hcparty, fk, code.type, code.code,  d<99999999?d*1000000:d], service._id);
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

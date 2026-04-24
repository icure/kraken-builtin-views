function(doc) {
  if (doc.java_type === 'org.taktik.icure.entities.Contact' && !doc.deleted) {
    require('views/lib/emit_for_delegates').emit_for_delegates(doc, function (delegate, doc) {
      doc.services.forEach(function (service) {
        let d = service.valueDate ? service.valueDate : service.openingDate;
        let year = d > 10000000000000 && d < 99991231235959 ? Math.floor(d / 10000000000) : null
        let month = d > 10000000000000 && d < 99991231235959 ? Math.floor(d / 100000000) % 100 : null
        if (month > 12) {
          month = null
          year = null
        }
        if (service.codes && service.codes.length && service._id != null) {
          service.codes.forEach(function (code) {
            emit([year, month, delegate, code.type, code.code], [service._id, d]);
          });
        }
      });
    })
  }
}

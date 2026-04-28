function(doc) {
  if (doc.java_type === 'org.taktik.icure.entities.Message' && !doc.deleted && doc.secretForeignKeys && doc.secretForeignKeys.length) {
    var actors = {};
    if (doc.fromHealthcarePartyId) {
      actors[doc.fromHealthcarePartyId] = 1;
    }
    if (doc.secretForeignKeys) {
      doc.secretForeignKeys.forEach(function (fk) {
        actors[fk] = 1;
      });
    }
    if (doc.recipients) {
      doc.recipients.forEach(function (rId) {
        actors[rId] = 1;
      });
    }
    require('views/lib/emit_for_delegates').emit_for_delegates(doc, function (dataOwnerId, doc) {
        Object.keys(actors).forEach(function (a) {
            emit([dataOwnerId, doc.fromAddress, a], null);
        });
    })
  }
}

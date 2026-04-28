function(doc) {
  if (doc.java_type === 'org.taktik.icure.entities.Message' && !doc.deleted) {
    var addresses = (doc.toAddresses && doc.toAddresses.length) || (doc.invoiceIds && doc.invoiceIds.length) ? {} : {'INBOX': 1};
    if (doc.toAddresses) {
      doc.toAddresses.forEach(function (a) {
        addresses[a] = 1;
      });
    }
    require('views/lib/emit_for_delegates').emit_for_delegates(doc, function (dataOwnerId, doc) {
      Object.keys(addresses).forEach(function (a) {
        emit([dataOwnerId, a, -doc.received], null);
      });
    })
  }
}

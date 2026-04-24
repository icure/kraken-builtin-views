function(doc) {
  var emit_contacts = function (k, doc) {
    var formIdsMap = {};
    doc.services.forEach(function (s) {
      if (s.formId) {
        if (!formIdsMap[s.formId]) {
          formIdsMap[s.formId] = 1;
          emit([k, s.formId], null);
        }
      }
    });
    doc.subContacts.forEach(function (sc) {
      if (sc.formId) {
        if (!formIdsMap[sc.formId]) {
          formIdsMap[sc.formId] = 1;
          emit([k, sc.formId], null);
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

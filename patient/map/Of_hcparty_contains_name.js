function(doc) {
  if (doc.java_type == 'org.taktik.icure.entities.Patient' && !doc.deleted) {
    var normalize = require('views/lib/normalize').normalize

    var emit_normalized_substrings = function (k, txt, docId) {
      var r = normalize(txt.toLowerCase());
      for (var i = 0; i <= r.length - 3; i++) {
        emit([k, (r.substr(i, r.length - i))], docId);
      }
    };

    if (doc.lastName || doc.firstName) {
      if (doc.patientHealthCareParties) {
        doc.patientHealthCareParties.forEach(function (phcp) {
          emit_normalized_substrings(phcp.healthcarePartyId, (doc.lastName ? doc.lastName : "") + (doc.firstName ? doc.firstName : ""), doc._id);
        });
      }
    }
    if (doc.maidenName && doc.maidenName != doc.lastName) {
      if (doc.patientHealthCareParties) {
        doc.patientHealthCareParties.forEach(function (phcp) {
          emit_normalized_substrings(phcp.healthcarePartyId, doc.maidenName, doc._id);
        });
      }
    }
    if (doc.spouseName && doc.spouseName != doc.lastName) {
      if (doc.patientHealthCareParties) {
        doc.patientHealthCareParties.forEach(function (phcp) {
          emit_normalized_substrings(phcp.healthcarePartyId, doc.spouseName, doc._id);
        });
      }
    }
  }
}

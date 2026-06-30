map = function(doc) {
  if (doc.java_type == 'org.taktik.icure.entities.Patient' && !doc.deleted) {
    var normalize_and_substring = require('views/lib/normalize').normalize_and_substring
    var emit_normalized_substrings = function (k, strings, docId) {
      normalize_and_substring(strings, 1000, 100, (it) => {
        emit([k, it], docId);
      })
    };

    if (doc.lastName || doc.firstName) {
      if (doc.patientHealthCareParties) {
        doc.patientHealthCareParties.forEach(function (phcp) {
          emit_normalized_substrings(phcp.healthcarePartyId, [(doc.lastName ? doc.lastName : ""), (doc.firstName ? doc.firstName : "")], doc._id);
        });
      }
    }
    if (doc.maidenName && doc.maidenName != doc.lastName) {
      if (doc.patientHealthCareParties) {
        doc.patientHealthCareParties.forEach(function (phcp) {
          emit_normalized_substrings(phcp.healthcarePartyId, [doc.maidenName], doc._id);
        });
      }
    }
    if (doc.spouseName && doc.spouseName != doc.lastName) {
      if (doc.patientHealthCareParties) {
        doc.patientHealthCareParties.forEach(function (phcp) {
          emit_normalized_substrings(phcp.healthcarePartyId, [doc.spouseName], doc._id);
        });
      }
    }
  }
}

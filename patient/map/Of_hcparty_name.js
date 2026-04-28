function(doc) {
    if (doc.java_type == 'org.taktik.icure.entities.Patient' && !doc.deleted) {
        var normalize = require('views/lib/normalize').normalize
        var emit_normalized_substrings = function(k,txt,docId) {
            var r = normalize(txt.toLowerCase());
            emit([k,r], docId);
        };

        if(doc.patientHealthCareParties) {
            doc.patientHealthCareParties.forEach(function(phcp){
              if (doc.lastName) {
                emit_normalized_substrings(phcp.healthcarePartyId, doc.lastName + (doc.firstName?doc.firstName:''), doc._id);
              } else {
                emit([phcp.healthcarePartyId,null], docId);
              }
            });
        }
    }
}

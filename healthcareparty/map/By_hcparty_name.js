function(doc) {

    if (doc.java_type === 'org.taktik.icure.entities.HealthcareParty' && !doc.deleted) {
        var normalize_substrings = require('views/lib/normalize').normalize
        var emit_normalized_substrings = function(txt,docId) {
            var r = normalize_substrings(txt.toLowerCase());
            var acc = {};
            for (var i = 0; i <= r.length - 3; i++) {
                acc[r.substr(i, r.length - i)] =  docId;
            }
            Object.keys(acc).forEach(function (k) {
                emit(k,docId);
            });
        };

        if (doc.lastName || doc.firstName) {
            emit_normalized_substrings(doc.lastName + (doc.firstName ? doc.firstName : ""), doc._id);
        }
        if (doc.name) {
            emit_normalized_substrings(doc.name, doc._id);
        }
        if (doc.speciality) {
		    emit_normalized_substrings(doc.speciality, doc._id);
	    }
    }
}

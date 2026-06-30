map = function(doc) {
    if (doc.java_type === 'org.taktik.icure.entities.HealthcareParty' && !doc.deleted) {
        var normalize_and_substring = require('views/lib/normalize').normalize_and_substring
        var emit_normalized_substrings = function(strings, docId) {
            normalize_and_substring(strings, 1000, 100, (it) => {
                emit(it, docId)
            })
        };

        if (doc.lastName || doc.firstName) {
            emit_normalized_substrings([(doc.lastName ? doc.lastName : ""), (doc.firstName ? doc.firstName : "")], doc._id);
        }
        if (doc.name) {
            emit_normalized_substrings([doc.name], doc._id);
        }
        if (doc.speciality) {
		    emit_normalized_substrings([doc.speciality], doc._id);
	    }
    }
}

function(doc) {
    if (doc.java_type == 'org.taktik.icure.entities.Patient' && !doc.deleted) {
        var normalize = require('views/lib/normalize').normalize
        var emit_normalized_substrings = function (k,txt,docId) {
            var r = normalize(txt.toLowerCase());
            emit([k,r], null);
        };

        require('views/lib/emit_for_delegates').emit_for_delegates(doc, function (dataOwnerId, doc) {
            if (doc.lastName) {
                emit_normalized_substrings(dataOwnerId, doc.lastName + (doc.firstName?doc.firstName:''), doc._id);
            } else {
                emit([dataOwnerId,null], null);
            }
        })
    }
}

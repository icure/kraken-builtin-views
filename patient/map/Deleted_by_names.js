function(doc) {
    if (doc.java_type === 'org.taktik.icure.entities.Patient' && doc.deleted) {
        var normalize = require('views/lib/normalize').normalize
        var lastName = normalize(doc.lastName);
        var firstName = normalize(doc.firstName);
        emit([lastName, firstName]);
        emit([{}, firstName]);
    }
}

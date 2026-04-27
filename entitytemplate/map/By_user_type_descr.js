function(doc) {
    if (doc.java_type == 'org.taktik.icure.entities.EntityTemplate' && !doc.deleted && doc.userId) {
        var normalize_substrings = require('views/lib/normalize').normalize

        var r = doc.txt ? normalize_substrings(doc.txt.toLowerCase()) : null;
        var summary = {'_id':doc._id,'_rev':doc._rev,'java_type':doc.java_type,'descr':doc.descr,'entityType':doc.entityType,'userId':doc.userId,'defaultTemplate':doc.defaultTemplate};
        if (r) {
            for (var i = 0; i <= r.length - 3; i++) {
                emit([doc.userId, doc.entityType, r.substr(i, r.length - i)], summary);
            }
        } else {
            emit([doc.userId, doc.entityType, null], summary);
        }
    }
}

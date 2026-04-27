function(doc) {
    if (doc.java_type == 'org.taktik.icure.entities.FrontEndMigration' && !doc.deleted && doc.name && doc.userId) {
        emit([doc.userId, doc.name], doc._id);
    }
}
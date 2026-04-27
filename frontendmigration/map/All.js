function(doc) {
    if (doc.java_type == 'org.taktik.icure.entities.FrontEndMigration' && !doc.deleted) emit(null, doc._id)
}
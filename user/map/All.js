function(doc) {
    if (doc.java_type == 'org.taktik.icure.entities.User' && !doc.deleted) emit(null, doc._rev)
}
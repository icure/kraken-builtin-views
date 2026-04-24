function(doc) {
    if (doc.java_type == 'org.taktik.icure.entities.Document' && !doc.deleted) emit(null, doc._id)
}
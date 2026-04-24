function(doc) {
    if (doc.java_type == 'org.taktik.icure.entities.DocumentTemplate' && !doc.deleted) emit(doc._id, null)
}
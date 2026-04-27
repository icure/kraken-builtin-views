function(doc) {
    if (doc.java_type == 'org.taktik.icure.entities.EntityTemplate' && !doc.deleted) emit(null, doc._id)
}
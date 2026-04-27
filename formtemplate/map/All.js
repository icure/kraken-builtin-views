function(doc) {
    if (doc.java_type == 'org.taktik.icure.entities.FormTemplate' && !doc.deleted) emit(null, doc._id)
}
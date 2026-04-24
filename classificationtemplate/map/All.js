function(doc) {
    if (doc.java_type == 'org.taktik.icure.entities.ClassificationTemplate' && !doc.deleted) emit(doc.label, doc._id)
}
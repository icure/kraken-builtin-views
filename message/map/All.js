function(doc) {
    if (doc.java_type === 'org.taktik.icure.entities.Message' && !doc.deleted) emit(null, doc._id)
}
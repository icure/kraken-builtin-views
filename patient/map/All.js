function(doc) {
    if (doc.java_type === 'org.taktik.icure.entities.Patient' && !doc.deleted) emit(null, doc._id)
}
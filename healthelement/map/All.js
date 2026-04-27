function(doc) {
    if (doc.java_type == 'org.taktik.icure.entities.HealthElement' && !doc.deleted) emit(null, doc._id)
}
function(doc) {
    if (doc.java_type == 'org.taktik.icure.entities.Device' && !doc.deleted) emit(null, doc._id)
}
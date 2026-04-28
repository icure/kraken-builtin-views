function(doc) {
    if (doc.java_type == 'org.taktik.icure.entities.Place' && !doc.deleted) emit(null, doc._id)
}
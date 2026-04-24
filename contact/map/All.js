function(doc) {
    if (doc.java_type == 'org.taktik.icure.entities.Contact' && !doc.deleted) emit(null, doc._id)
}
function(doc) {
    if (doc.java_type == 'org.taktik.icure.entities.Form' && !doc.deleted) emit(null, doc._id)
}
function(doc) {
    if (doc.java_type == 'org.taktik.icure.entities.Insurance' && !doc.deleted) emit(null, doc._id)
}
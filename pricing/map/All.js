function(doc) {
    if (doc.java_type == 'org.taktik.icure.entities.Tarification' && !doc.deleted) emit(null, doc._id)
}
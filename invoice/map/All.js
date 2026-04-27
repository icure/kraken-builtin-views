function(doc) {
    if (doc.java_type === 'org.taktik.icure.entities.Invoice' && !doc.deleted) emit(null, doc._id)
}
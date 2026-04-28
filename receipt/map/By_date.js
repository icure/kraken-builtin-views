function(doc) {
    if (doc.java_type === 'org.taktik.icure.entities.Receipt' && !doc.deleted) emit(doc.created)
}
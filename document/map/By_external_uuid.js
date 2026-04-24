function(doc) {
    if (doc.java_type == 'org.taktik.icure.entities.Document' && !doc.deleted && doc.externalUuid) emit(doc.externalUuid, doc._id)
}
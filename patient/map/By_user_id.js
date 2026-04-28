function(doc) {
    if (doc.java_type == 'org.taktik.icure.entities.Patient' && !doc.deleted && doc.userId) emit(doc.userId, doc._id)
}
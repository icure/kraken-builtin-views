function(doc) {
    if (doc.java_type == 'org.taktik.icure.entities.base.Code' && !doc.deleted) emit(null, doc._id)
}
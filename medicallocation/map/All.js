map = function(doc) {
    if (doc.java_type === 'org.taktik.icure.entities.Keyword' && !doc.deletionDate) emit(null, doc._id)
}